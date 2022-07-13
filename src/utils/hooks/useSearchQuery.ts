import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const useLocationQueryParams = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const urlParamsArray = new URLSearchParams(location.search);
    const urlParams = Array.from(urlParamsArray.entries()).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value
    }), {} as Record<string, string>);

    const [query, setQuery] = useState<string>(urlParams.q || "")
    const [page, setPage] = useState(parseInt(urlParams.page) || 1)
    const updateUrlParams = () => {
        let p: Record<string, string> = { page: page.toString() };

        if (query !== "") {
            p.q = query;
        }

        navigate({ pathname: location.pathname, search: (new URLSearchParams(p)).toString() })
    }

    return ({ query, page, updateUrlParams, setPage, setQuery });
}

export default useLocationQueryParams;
