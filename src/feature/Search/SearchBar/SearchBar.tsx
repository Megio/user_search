import { Input, Stack, Button, Image } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { useTranslation } from "react-i18next";


type SearchBarProps = {
    setQuery: Dispatch<SetStateAction<string>>;
    setPage: Dispatch<SetStateAction<number>>;
    initialInputValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery, setPage, initialInputValue }) => {
    const [isSearchActive, setIsSearchActive] = useState(initialInputValue !== "")
    const [value, setValue] = useState<string>(initialInputValue)
    const handleChange = (event: any) => setValue(event.target.value)

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        setIsSearchActive(true);
        setPage(1)
        setQuery(value);
    }, [value])

    return <Stack
        direction="column"
        h={[isSearchActive ? "15vh" : "100vh", isSearchActive ? "10vh" : "100vh"]}
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={["0 16px", "0 64px"]}
        spacing={"32px"}
        backgroundColor="white"
        transition="height 350ms ease-out"
        borderBottom={isSearchActive ? "1px solid black" : "none"}
        position="fixed"
        zIndex={2}
    >
        {!isSearchActive && <Image src='https://www.fillmurray.com/800/200' alt='BillMurray' />}
        <Stack direction={["column", "row"]} spacing={["8px", "32px"]} w="100%">
            <Input
                placeholder={t("search.placeholder")}
                backgroundColor="white"
                variant='outline'
                value={value}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key == 'Enter' && value !== "") return handleClick() }}
            />
            <Button fontSize={'sm'} onClick={handleClick} minW="128px" disabled={value === ""}>{t("common.search")}</Button>
        </Stack>
    </Stack>
}

export default SearchBar