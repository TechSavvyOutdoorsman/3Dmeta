import {
    Box
} from '@chakra-ui/react'

const Container = ({ children }) => {
    return (
        <Box w='100%' h={{ base: '400px', md: '600px'}}>
            {children}
        </Box>
    )
}

export default Container