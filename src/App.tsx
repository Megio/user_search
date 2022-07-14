import { ChakraProvider } from '@chakra-ui/react'
import Search from './feature/Search'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'


const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<Search />} />
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
