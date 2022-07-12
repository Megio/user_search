import { VStack, Text } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'


const ErrorComponent = () => {
    return <VStack h="100%" w="100%" display="flex" alignItems="center" justifyContent="center" spacing="32px">
        <WarningIcon w={32} h={32} color="red.500" />
        <Text color="red.500" fontSize='3xl'>{'ops something went wrong'}</Text>
    </VStack>
}

export default ErrorComponent