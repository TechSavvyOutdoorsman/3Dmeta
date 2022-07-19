import {
    Flex
} from '@chakra-ui/react'

const Container = ({ children }) => {
    return (
        <Flex
            flexDir={{ base: 'column', md: 'row-reverse' }}
            gap='3rem'
            justify='space-between'
            align='center'
        >
            {children}
        </Flex>
    )
}

export default Container