import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { PathReporter } from "io-ts/PathReporter";
import { Decoder, Errors } from "io-ts";
import flow from "lodash/fp/flow";
import pickBy from "lodash/fp/pickBy";
import identity from "lodash/fp/identity";
import { IStringifyOptions, stringify } from "qs";

type ResDecoder<T> = (data: unknown) => E.Either<Errors, T>;

/**
 * This function takes a decoder, and returns a function that receives data to decode.
 * If data is correctly decoded, it returns the data;
 * If there are decoding errors, it throws an error.
 * Useful to integrate io-ts with react-query.
 *
 */
const getOrThrow =
    <T>(decoder: ResDecoder<T>) =>
        (data: unknown): T =>
            pipe(
                decoder(data),
                E.fold<Errors, T, T>((e) => {
                    throw new Error(PathReporter.report(E.left(e)).join("\n"));
                }, (identity))
            );

export const validateApiCall = <T>(
    apiCall: Promise<unknown>,
    decoder: Decoder<unknown, T>
): Promise<T> => apiCall.then(getOrThrow(decoder.decode));

const createSerializeQueryParams: (
    stringifyOptions: IStringifyOptions
) => (params: Record<string, unknown>) => string = (
    stringifyOptions: IStringifyOptions
) =>
        flow(pickBy(identity), (params: Record<string, unknown>) =>
            stringify(params, {
                ...stringifyOptions,
            })
        );

export const serializeQueryParams: (params: Record<string, unknown>) => string =
    createSerializeQueryParams({ indices: false });