import { Stack, Avatar, Text, Link, HStack, Button } from "@chakra-ui/react"
import axios from "axios"
import { MouseEvent, useState } from "react"
import { User } from "../../feature/Search/codecs"
import { StarIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

type UserItemProps = {
    user: User
}

type UserInfo = {
    bio: string | undefined,
    followers: string | undefined,
    repos: string | undefined,
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    const [isViewed, setIsViewed] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [userInfo, setUserInfo] = useState<UserInfo>({
        bio: undefined,
        followers: undefined,
        repos: undefined,
    })

    const { t } = useTranslation()


    const handleTellMeMore = async (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setShowInfo(true);
        const userInfoResponse = await axios
            .get(user.url)
            .then((res) => res.data)
        setUserInfo({
            bio: userInfoResponse.bio,
            followers: userInfoResponse.followers,
            repos: userInfoResponse.public_repos
        })
    }


    return <Link href={user.html_url} isExternal w="100%" _hover={{ tetxDecoration: "none" }}>
        <Stack
            direction="row"
            spacing="32px"
            w="100%"
            minH="72px"
            border="1px solid grey"
            borderRadius="16px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={!showInfo ? "space-between" : "flex-start"}
            padding="16px"
            backgroundColor={isViewed ? 'blue.100' : "unset"}
            onMouseOver={() => setIsViewed(true)}
            onMouseLeave={() => setIsViewed(false)}
        >
            <HStack spacing="16px">
                <Avatar name={user.login} src={user.avatar_url} />
                <Text>{user.login}</Text>
            </HStack>
            {showInfo && userInfo.bio && <Text as='em' fontSize='sm' flex={2}>{userInfo.bio}</Text>}
            <Stack direction="row" spacing="16px" flex={1} justifyContent="flex-end">
                {showInfo && userInfo.followers &&
                    <Stack direction="column" spacing="4px" >
                        <Text fontSize="xs">{t("user.info.followers")}</Text>
                        <Stack direction="row" alignItems="center">
                            <StarIcon w={2} h={2} />
                            <Text>{userInfo.followers}</Text>
                        </Stack>
                    </Stack>
                }
                {showInfo && userInfo.repos &&
                    <Stack direction="column" spacing="4px" >
                        <Text fontSize="xs">{t("user.info.repos")}</Text>
                        <Stack direction="row" alignItems="center">
                            <TriangleUpIcon w={2} h={2} />
                            <Text>{userInfo.repos}</Text>
                        </Stack>
                    </Stack>
                }
                {!showInfo &&
                    <Button backgroundColor="white" variant="outline" onClick={(e: MouseEvent) => handleTellMeMore(e)}>
                        {t("tell.me.more")}
                    </Button>
                }
            </Stack>
        </Stack >
    </Link >
}

export default UserItem