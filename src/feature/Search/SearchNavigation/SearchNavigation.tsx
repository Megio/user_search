import { Button, Text, HStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

type SearchNavigationProps = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    totalElements?: number;
}

const SearchNavigation: React.FC<SearchNavigationProps> = ({ page, setPage, totalElements }) => {
    const { t } = useTranslation();

    const getNumberOfPages =
        () => {
            if (totalElements) {
                if (totalElements < 30) { return 1 }
                else if (totalElements % 30 === 0) { return totalElements / 30 }
                else { return (totalElements / 30) + 1 }
            }
        }

    return <HStack
        spacing="auto"
        h="8vh"
        w="100vw"
        position="fixed"
        bottom={0}
        padding="0 32px"
        backgroundColor="white"
        borderTop="1px solid black">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} minW="128px">{t("common.previous.page")}</Button>
        <Text>
            {totalElements && `[${page === 1 ? 1 : (page - 1) * 30} - ${totalElements < 30 ? totalElements : 30 * page}] / ${totalElements}`}
        </Text>
        <Button onClick={() => setPage(page + 100)} disabled={page === getNumberOfPages()} minW="128px">{t("common.next.page")}</Button>
    </HStack >
}

export default SearchNavigation