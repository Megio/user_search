import { Stack } from '@chakra-ui/react';
import { UserResponse } from '../codecs';
import { UseQueryResult } from "react-query"
import ErrorComponent from '../../../components/ErrorComponent';
import UserItemPlaceholder from '../../../components/UserItemPlaceHolder';
import UserItem from '../../../components/UserItem';



type SearchResultsProps = {
    results: UseQueryResult<UserResponse>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return <Stack
        direction="column"
        spacing="16px"
        overflow="auto"
        w="100vw"
        h={["77vh", "82vh"]}
        display="flex"
        position="absolute"
        top={["15vh", "10vh"]}
        padding="16px 32px"
        backgroundColor="white"
    >
        {results.isError && <ErrorComponent />}
        {results.isLoading && [1, 2, 3, 4].map((placeholder) => <UserItemPlaceholder key={placeholder} />)}
        {results.isSuccess && results.data.items.map((user) => <UserItem key={user.id} user={user} />)}
    </Stack >
}

export default SearchResults