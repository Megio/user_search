import { Stack } from "@chakra-ui/react"
import { useState } from "react"
import SearchBar from "./SearchBar"
import SearchNavigation from "./SearchNavigation"
import SearchResults from "./SearchResults"
import { useQuery } from "react-query"
import { getUsers } from "./api"
import useLocationQueryParams from "../../utils/hooks/useSearchQuery"

const Search = () => {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const setSearchParams = useLocationQueryParams((newParams) => {
        if (newParams.page) {
            setPage(parseInt(newParams.page))
        }
        if (newParams.q) {
            setQuery(newParams.q)
        }
    });

    console.log(query);



    const results = useQuery(
        [page, query],
        ({ pageParam = page }) => getUsers({ query: query, page: pageParam }),
        {
            refetchOnWindowFocus: false,
            onSettled: () => setSearchParams({ q: query, page: page.toString() }),
            enabled: !!query,
        },
    )

    return <Stack direction="column" overflow="hidden" h="100vh" spacing={0}>
        <SearchBar initialInputValue={query} setQuery={setQuery} setPage={setPage} />
        <SearchResults results={results} />
        <SearchNavigation
            page={page}
            setPage={setPage}
            totalElements={results.isSuccess ? results.data.total_count : undefined} />
    </Stack>
}

export default Search