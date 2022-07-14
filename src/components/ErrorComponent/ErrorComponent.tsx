import { Stack, Text } from "@chakra-ui/react"
import { WarningIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';


const ErrorComponent = () => {
    const { t } = useTranslation()

    return <Stack direction="column" h="100%" w="100%" display="flex" alignItems="center" justifyContent="center" spacing="32px">
        <WarningIcon w={32} h={32} color="red.500" />
        <Text color="red.500" fontSize='3xl' textAlign="center">{t('common.error')}</Text>
    </Stack>
}

export default ErrorComponent