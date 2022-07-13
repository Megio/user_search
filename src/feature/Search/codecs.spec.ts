import { describe, it, expect } from 'vitest';
import {
    UserCodec,
    UsersResponseCodec,
} from "./codecs";


describe("board codecs", () => {
    describe("UserCodec", () => {
        it("should validate a valid object", () => {
            const input = {
                login: "test-login",
                id: 1,
                node_id: "test-node-id",
                avatar_url: "test-avatar-url",
                gravatar_id: "test-gravater-id",
                url: "test-url",
                html_url: "test-html-url",
                followers_url: "test-followers-url",
                subscriptions_url: "test-subscripton-url",
                organizations_url: "test-organizations-url",
                repos_url: "test-repo-url",
                received_events_url: "test-received",
                type: "test-type",
                score: 3,
                following_url: "test-following-url",
                gists_url: "test-gists-url",
                starred_url: "test-starred-url",
                events_url: "test-events-url",
                site_admin: false
            };

            expect(UserCodec.asDecoder().decode(input)._tag).toBe("Right");
        });

        it("should not validate an invalid object", () => {
            const input = {
                login: 23,
                id: 1,
                node_id: "test-node-id",
                avatar_url: "test-avatar-url",
                gravatar_id: "test-gravater-id",
                url: "test-url",
                html_url: "test-html-url",
                followers_url: "test-followers-url",
                subscriptions_url: "test-subscripton-url",
                organizations_url: "test-organizations-url",
                repos_url: "test-repo-url",
                received_events_url: "test-received",
                type: "test-type",
                score: 3,
                following_url: "test-following-url",
                gists_url: "test-gists-url",
                starred_url: "test-starred-url",
                events_url: "test-events-url",
                site_admin: false
            };

            expect(UserCodec.asDecoder().decode(input)._tag).toBe("Left");
        });
    });

    describe("UsersResponseCodec", () => {
        it("should validate a valid object", () => {
            const input = {
                login: "test-login",
                id: 1,
                node_id: "test-node-id",
                avatar_url: "test-avatar-url",
                gravatar_id: "test-gravater-id",
                url: "test-url",
                html_url: "test-html-url",
                followers_url: "test-followers-url",
                subscriptions_url: "test-subscripton-url",
                organizations_url: "test-organizations-url",
                repos_url: "test-repo-url",
                received_events_url: "test-received",
                type: "test-type",
                score: 3,
                following_url: "test-following-url",
                gists_url: "test-gists-url",
                starred_url: "test-starred-url",
                events_url: "test-events-url",
                site_admin: false
            };

            const response = {
                total_count: 233,
                incomplete_results: false,
                items: [input]
            }

            expect(UsersResponseCodec.asDecoder().decode(response)._tag).toBe("Right");
        });

        it("should not validate an invalid object", () => {
            const input = {
                login: 23,
                id: 1,
                node_id: "test-node-id",
                avatar_url: "test-avatar-url",
                gravatar_id: "test-gravater-id",
                url: "test-url",
                html_url: "test-html-url",
                followers_url: "test-followers-url",
                subscriptions_url: "test-subscripton-url",
                organizations_url: "test-organizations-url",
                repos_url: "test-repo-url",
                received_events_url: "test-received",
                type: "test-type",
                score: 3,
                following_url: "test-following-url",
                gists_url: "test-gists-url",
                starred_url: "test-starred-url",
                events_url: "test-events-url",
                site_admin: false
            };

            const response = {
                total_count: true,
                incomplete_results: false,
                items: [input]
            }

            expect(UsersResponseCodec.asDecoder().decode(response)._tag).toBe("Left");
        });

    });
});
