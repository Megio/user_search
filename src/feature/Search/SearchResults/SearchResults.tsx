import { Box, VStack, Text } from '@chakra-ui/react';
import { UserResponse } from '../codecs';
import { UseQueryResult } from "react-query"


type SearchResultsProps = {
    results?: UseQueryResult<UserResponse>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return <VStack
        spacing="16px"
        overflow="auto"
        w="100vw"
        h="82vh"
        display="flex"
        position="absolute"
        top="10vh"
        padding="16px 32px"
        backgroundColor="white"
    >
        {results.isError &&
            <Text>
                {'rotto tutto'}
            </Text>
        }
        {results.isLoading &&
            <Text>
                {'...caricamento'}
            </Text>
        }
        {results.isSuccess && results.data.items.map((user) =>
            <Box
                key={user.id}
                w="100%"
                minH="64px"
                border="1px solid grey"
                borderRadius="16px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="16px">
                {user.login}
            </Box>
        )}
    </VStack >
}

export default SearchResults