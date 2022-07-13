import { Box, Input, HStack, Button, Image, VStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from "react"
import { useTranslation } from "react-i18next";


type SearchBarProps = {
    setSearchParam: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchParam }) => {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [value, setValue] = useState<string>('')
    const handleChange = (event: any) => setValue(event.target.value)

    const { t } = useTranslation();

    const handleClick = () => {
        setIsSearchActive(true);
        setSearchParam(value);
    }

    return <VStack
        h={isSearchActive ? "10vh" : "100vh"}
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="0 64px"
        spacing="32px"
        backgroundColor="white"
        transition="height 350ms ease-out"
        borderBottom={isSearchActive ? "1px solid black" : "none"}
        position="fixed"
        zIndex={2}
    >
        {!isSearchActive && <Image src='https://www.fillmurray.com/800/200' alt='BillMurray' />}
        <HStack spacing="32px" w="100%">
            <Input
                placeholder={t("search.placeholder")}
                backgroundColor="white"
                variant='outline'
                value={value}
                onChange={handleChange}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key == 'Enter') return handleClick() }}
            />
            <Button onClick={handleClick} disabled={value === ""} minW="128px">{t("common.search")}</Button>
        </HStack>
    </VStack>
}

export default SearchBar