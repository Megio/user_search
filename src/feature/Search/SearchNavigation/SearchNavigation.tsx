import { Button, Text, HStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

type SearchNavigationProps = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

const SearchNavigation: React.FC<SearchNavigationProps> = ({ page, setPage }) => {

    return <HStack
        spacing="auto"
        h="8vh"
        w="100vw"
        position="fixed"
        bottom={0}
        padding="0 32px"
        backgroundColor="white"
        borderTop="1px solid black">
        <Button onClick={() => setPage(page - 1)}>{"Prev Page"}</Button>
        <Text>{"caneblu"}</Text>
        <Button onClick={() => setPage(page + 1)}>{"Next Page"}</Button>
    </HStack >
}

export default SearchNavigation