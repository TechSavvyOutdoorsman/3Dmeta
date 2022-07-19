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
            w='380px'
        >
            <Heading as='h2' color='mBlack.900'>{heading}</Heading>
            <Text as='p' color='mBlack.900' lineHeight='6'>{body}</Text>
        </Flex>
    )
}

export default TextBlock