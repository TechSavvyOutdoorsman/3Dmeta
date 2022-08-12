import {
    Heading,
    Text,
    Flex
} from '@chakra-ui/react'

const TextBlock = ({ heading, body }) => {
    return (
        <Flex
            flexDir='column'
            gap='1rem'
            textAlign='left'
        >
            <Heading as='h2' color='mBlack.900' fontSize='x-large' fontWeight='semibold'>{heading}</Heading>
            <Text as='p' color='mBlack.900' lineHeight='6' fontSize='large'>{body}</Text>
        </Flex>
    )
}

export default TextBlock