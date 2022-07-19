import {
    Flex,
    Heading
} from '@chakra-ui/react'

const Title = ({ children }) => {
    return (
        <Flex align='left' textAlign='left'>
            <Heading as='h1' fontSize='xx-large' color='mBlack.900'>Our Products</Heading>
        </Flex>
    )
}

export default Title