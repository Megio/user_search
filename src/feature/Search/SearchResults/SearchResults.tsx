import { Box, VStack } from '@chakra-ui/react';

const SearchResults = () => {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((el) =>
            <Box
                key={el}
                w="100%"
                minH="64px"
                border="1px solid grey"
                borderRadius="16px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="16px">
                {el}
            </Box>
        )}
    </VStack >
}

export default SearchResults