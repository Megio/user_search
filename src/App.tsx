import { ChakraProvider } from '@chakra-ui/react'
import Search from './feature/Search'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom'


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
