import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

const UserItemPlaceholder = () => {
    return <HStack
        spacing="32px"
        w="100%"
        minH="64px"
        h="64px"
        border="1px solid grey"
        borderRadius="16px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="16px">
        <SkeletonCircle size='12' />
        <SkeletonText noOfLines={1} w="200px" />
    </HStack>
}

export default UserItemPlaceholder