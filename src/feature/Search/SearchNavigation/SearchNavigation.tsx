import { Box, Button, Text, HStack } from '@chakra-ui/react';

const SearchNavigation = () => {
    return <HStack
        spacing="auto"
        h="8vh"
        w="100vw"
        position="fixed"
        bottom={0}
        padding="0 32px"
        backgroundColor="white"
        borderTop="1px solid black">
        <Button>{"Prev Page"}</Button>
        <Text>{"caneblu"}</Text>
        <Button>{"Next Page"}</Button>
    </HStack >
}

export default SearchNavigation