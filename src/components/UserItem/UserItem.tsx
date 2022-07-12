import { HStack, Avatar, Text } from "@chakra-ui/react"
import { User } from "../../feature/Search/codecs"

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return <HStack
        spacing="32px"
        w="100%"
        minH="64px"
        border="1px solid grey"
        borderRadius="16px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="16px">
        <Avatar name={user.login} src={user.avatar_url} />
        <Text>{user.login}</Text>
    </HStack>
}

export default UserItem