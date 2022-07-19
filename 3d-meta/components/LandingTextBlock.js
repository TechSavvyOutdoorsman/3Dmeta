import {
    Flex,
    Text
} from '@chakra-ui/react'

const LandingTextBlock = ({ children }) => {
    return (
        <Flex textAlign='left' maxW='container.md'>
            <Text as='p' color='mBlack.900' fontSize='x-large' lineHeight='7'>{children}</Text>
        </Flex>
    )
}

export default LandingTextBlock