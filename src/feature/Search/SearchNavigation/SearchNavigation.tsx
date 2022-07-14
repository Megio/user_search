import { Button, Text, Stack } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type SearchNavigationProps = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    totalElements?: number;
}

const SearchNavigation: React.FC<SearchNavigationProps> = ({ page, setPage, totalElements }) => {
    const { t } = useTranslation();
    const [total, setTotal] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (totalElements) {
            setTotal(totalElements)
        }
    }, [totalElements])

    // 30 is the default number of item per page for github serach api
    const getNumberOfPages =
        () => {
            if (totalElements) {
                if (totalElements < 30) { return 1 }
                else if (totalElements % 30 === 0) { return totalElements / 30 }
                else { return (totalElements / 30) + 1 }
            }
        }

    return <Stack
        spacing="auto"
        h="8vh"
        w="100vw"
        position="fixed"
        bottom={0}
        p={["0 16px", "0 32px"]}
        backgroundColor="white"
        borderTop="1px solid black"
        direction="row"
        alignItems="center">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} minW={["100px", "128px"]}>{t("common.previous.page")}</Button>
        <Text>
            {total && `[${page === 1 ? 1 : (page - 1) * 30} - ${total < 30 ? total : 30 * page}] / ${total}`}
        </Text>
        <Button onClick={() => setPage(page + 1)} disabled={page === getNumberOfPages()} minW={["100px", "128px"]}>{t("common.next.page")}</Button>
    </Stack>
}

export default SearchNavigation