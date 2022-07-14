import { Stack, Text } from "@chakra-ui/react"
import { useTranslation } from 'react-i18next';

const NoResultComponent = () => {
    const { t } = useTranslation()

    return <Stack direction="column" h="100%" w="100%" display="flex" alignItems="center" justifyContent="center" spacing="32px">
        <Text color="gray.400" fontSize='3xl' textAlign="center">{t('no.results')}</Text>
    </Stack>
}

export default NoResultComponent