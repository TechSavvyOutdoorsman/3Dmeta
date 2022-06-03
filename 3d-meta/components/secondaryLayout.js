import Head from 'next/head'
import { Box, Flex } from '@chakra-ui/react'


const Layout = ({ children, title }) => {
    return (
        <Box as='main'>
            <Head>
                <title>METATECH Digital - {title}</title>
            </Head>
            <Flex minH='100vh' align='center' justify='center' p={0} m={0} maxW='container.lg'>
                {children}
            </Flex>
        </Box>
    )
}

export default Layout