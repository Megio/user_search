import { VStack } from "@chakra-ui/react"
import { useState } from "react"
import SearchBar from "./SearchBar"
import SearchNavigation from "./SearchNavigation"
import SearchResults from "./SearchResults"
import { useQuery } from "react-query"
import { getUsers } from "./api"

const Search = () => {
    const [page, setPage] = useState(1)
    const [searchParam, setSearchParam] = useState<string>("")

    const results = useQuery(
        [page, searchParam],
        ({ pageParam = page }) => getUsers({ query: searchParam, page: pageParam }),
        {
            refetchOnWindowFocus: false,
            enabled: !!searchParam,
        },
    )

    return <VStack overflow="hidden" h="100vh" spacing={0}>
        <SearchBar setSearchParam={setSearchParam} />
        <SearchResults results={results} />
        <SearchNavigation
            page={page}
            setPage={setPage}
            totalElements={results.isSuccess ? results.data.total_count : undefined} />
    </VStack >
}

export default Search