import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { identity, isEqual } from "lodash";
import { pipe } from "fp-ts/function";
import { getOrElse, tryCatch } from "fp-ts/Either";
import { BasicSearchParams } from "../../feature/Search/api";

const shallowCompare = <T extends Record<string, string>>(
    initialValues: T,
    currentValues: T
): Record<string, string> =>
    Object.keys(initialValues).reduce((acc, key) => {
        if (!isEqual(initialValues[key], currentValues[key]) && key !== "query") {
            return {
                ...acc,
                [key]: encodeURI(JSON.stringify(currentValues[key])),
            };
        }
        return acc;
    }, {} as T);

const parseFn = (value: string) =>
    pipe(
        tryCatch(() => JSON.parse(value), identity),
        getOrElse(() => value)
    );

interface UserSearchQueryReturn<T extends BasicSearchParams> {
    query: string;
    searchParams: T;
    setSearchParams: React.Dispatch<React.SetStateAction<T>>;
    updateUrlParams: () => void;
}

export interface UseSearchQueryOptions {
    minSearchLen?: number;
    handleQueryParam?: (values: Record<string, string>) => Record<string, string>;
}

const useSearchQuery = <T extends BasicSearchParams>(
    initialValue: T,
    { minSearchLen = 1, handleQueryParam = identity }: UseSearchQueryOptions = {}
): UserSearchQueryReturn<T> => {
    const navigate = useNavigate();
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);

    const parsedUrlParams = Array.from(urlParams.entries()).reduce(
        (acc, [key, value]) => {
            if (value) return { ...acc, [key]: parseFn(decodeURI(value)) };
            else return acc;
        },
        {} as T
    );

    const [searchParams, setSearchParams] = useState<T>({
        ...initialValue,
        ...parsedUrlParams,
        query: urlParams.get("q") || "",
    });

    const [query, setQuery] = useState(searchParams.query);

    useEffect(() => {
        setQuery(
            searchParams.query.length >= minSearchLen ? searchParams.query : ""
        );
    }, [minSearchLen, searchParams.query, setQuery]);

    const updateUrlParams = () => {
        const diffs = shallowCompare(initialValue, searchParams);
        navigate({
            pathname: location.pathname,
            search:
                searchParams.query.length || Object.keys(diffs).length !== 0
                    ? new URLSearchParams(
                        handleQueryParam({ ...diffs, q: query.trim() })
                    ).toString()
                    : "",
        });
    };


    return {
        query,
        searchParams,
        setSearchParams,
        updateUrlParams,
    };
};

export default useSearchQuery;
