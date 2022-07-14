import * as t from "io-ts";
import nullable from "../../utils/nullable";

export const UserCodec = t.type({
    login: t.string,
    id: t.number,
    node_id: t.string,
    avatar_url: t.string,
    gravatar_id: nullable(t.string),
    url: t.string,
    html_url: t.string,
    followers_url: t.string,
    subscriptions_url: t.string,
    organizations_url: t.string,
    repos_url: t.string,
    received_events_url: t.string,
    type: t.string,
    score: t.number,
    following_url: t.string,
    gists_url: t.string,
    starred_url: t.string,
    events_url: t.string,
    site_admin: t.boolean
})

export const UsersResponseCodec = t.type({
    total_count: t.number,
    incomplete_results: t.boolean,
    items: t.array(UserCodec)
});

export type User = t.TypeOf<typeof UserCodec>;
export type UserResponse = t.TypeOf<typeof UsersResponseCodec>;