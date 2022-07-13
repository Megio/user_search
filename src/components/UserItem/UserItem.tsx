import { HStack, Avatar, Text, Link } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { User } from "../../feature/Search/codecs"
import { StarIcon, TriangleUpIcon } from '@chakra-ui/icons'

type UserItemProps = {
    user: User
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    const [isViewed, setIsViewed] = useState(false)
    const [bio, setBio] = useState<string | undefined>(undefined)
    const [followers, setFollowers] = useState<number | undefined>(undefined)
    const [repos, setRepos] = useState<number | undefined>(undefined)


    // TODO: I don't like this, how can I show user information???
    const handleMouseOver = async () => {
        setIsViewed(true);
        const userInfo = await axios
            .get(user.url)
            .then((res) => res.data)
        setBio(userInfo.bio)
        setFollowers(userInfo.followers)
        setRepos(userInfo.public_repos)
    }

    const handleMouseLeave = () => {
        setIsViewed(false)
        setBio(undefined)
        setFollowers(undefined)
        setRepos(undefined)
    }


    return <Link href={user.html_url} isExternal w="100%" _hover={{ tetxDecoration: "none" }}>
        <HStack
            spacing="32px"
            w="100%"
            minH="72px"
            border="1px solid grey"
            borderRadius="16px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            padding="16px"
            backgroundColor={isViewed ? 'gray.100' : "unset"}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <Avatar name={user.login} src={user.avatar_url} />
            <Text>{user.login}</Text>
            {bio && <Text as='em' fontSize='sm' flex={1}>{bio}</Text>}
            <HStack spacing="16px" flex={1} justifyContent="flex-end">
                {followers && <HStack><StarIcon w={2} h={2} /><Text>{followers}</Text></HStack>}
                {repos && <HStack><TriangleUpIcon w={2} h={2} /><Text>{repos}</Text></HStack>}
            </HStack>
        </HStack >
    </Link >
}

export default UserItem