import React from 'react';
import { describe, expect, vi, it } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import UserItem from './UserItem';
import axios from 'axios'

vi.mock('axios', () => ({ default: { get: vi.fn() } }))

const mockedUser = {
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
}

describe('UserItem', () => {
    it('should render component if data is present', () => {
        const { getByLabelText, getByTestId, getByText } = render(<UserItem user={mockedUser} />);
        expect(getByLabelText("test-login")).toBeDefined()
        expect(getByTestId("test-avatar-url")).toBeDefined()
        expect(getByText("tell.me.more")).toBeDefined()
    })
    it('should call get function when tell me more button is pressed', async () => {
        const mockedResponse = { data: { bio: 'asd', followers: '12', public_repos: "23" } };
        (axios.get as any).mockResolvedValue(mockedResponse);
        const { getByText } = render(<UserItem user={mockedUser} />);
        const btn = getByText("tell.me.more")
        fireEvent.click(btn)
        await waitFor(() => expect(axios.get).toBeCalled())
        await waitFor(() => expect(getByText("asd")).toBeDefined())
        await waitFor(() => expect(getByText("12")).toBeDefined())
        await waitFor(() => expect(getByText("23")).toBeDefined())
    })
})
