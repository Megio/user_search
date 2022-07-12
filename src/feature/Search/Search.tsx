import { VStack } from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import SearchNavigation from "./SearchNavigation"
import SearchResults from "./SearchResults"



const Search = () => {
    return <VStack overflow="hidden" h="100vh" spacing={0}>
        <SearchBar />
        <SearchResults />
        <SearchNavigation />
    </VStack >
}

export default Search