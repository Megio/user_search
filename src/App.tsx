import { ChakraProvider } from '@chakra-ui/react'
import Search from './feature/Search'
import { QueryClient, QueryClientProvider } from 'react-query';


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Search />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
