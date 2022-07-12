import { Box, Input, HStack, Button } from "@chakra-ui/react"
import { useState } from "react"

const SearchBar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [query, setSearchParam] = useState<string | undefined>(undefined)
    const [value, setValue] = useState<string>('')
    const handleChange = (event: any) => setValue(event.target.value)

    const handleClick = () => {
        setIsSearchActive(true);
        setSearchParam(value);
    }

    console.log('query', query)

    return <Box
        h={isSearchActive ? "10vh" : "100vh"}
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="0 64px"
        backgroundColor="white"
        transition="height 350ms ease-out"
        borderBottom={isSearchActive ? "1px solid black" : "none"}
        position="fixed"
        zIndex={2}
    >
        <HStack spacing="32px" w="100%">
            <Input
                placeholder="search users"
                backgroundColor="white"
                variant='outline'
                value={value}
                onChange={handleChange} />
            <Button onClick={handleClick}>{"search"}</Button>
        </HStack>
    </Box>
}

export default SearchBar