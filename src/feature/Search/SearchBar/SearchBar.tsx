import { Input, Stack, Button, Image } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from "react"
import { useTranslation } from "react-i18next";


type SearchBarProps = {
    setSearchParam: Dispatch<SetStateAction<string>>;
    setPage: Dispatch<SetStateAction<number>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchParam, setPage }) => {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [value, setValue] = useState<string>('')
    const handleChange = (event: any) => setValue(event.target.value)

    const { t } = useTranslation();

    const handleClick = () => {
        setIsSearchActive(true);
        setPage(1)
        setSearchParam(value);

    }

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
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key == 'Enter') return handleClick() }}
            />
            <Button onClick={handleClick} disabled={value === ""} minW="128px">{t("common.search")}</Button>
        </Stack>
    </Stack>
}

export default SearchBar