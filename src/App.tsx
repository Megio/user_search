import { ChakraProvider } from '@chakra-ui/react'
import Search from './feature/Search'

const App = () => {

  return (
    <ChakraProvider>
      <Search />
    </ChakraProvider>
  )
}

export default App
