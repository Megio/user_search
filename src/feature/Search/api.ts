import axios from "axios";
import { UserResponse, UsersResponseCodec } from './codecs';
import { serializeQueryParams, validateApiCall } from "../../utils/api";
import { PaginatedParams, PaginatedRequest } from "../../utils/pagination";

export type BasicSearchParams = Record<"query", string>;

export const getUsers: PaginatedRequest<
    PaginatedParams & BasicSearchParams,
    UserResponse
> = (params): Promise<UserResponse> =>
        validateApiCall(axios
            .get("https://api.github.com/search/users", {
                params: {
                    q: params.query,
                    page: params.page,
                },
                paramsSerializer: serializeQueryParams,
            })
            .then((res) => res.data),
            UsersResponseCodec.asDecoder()
        )