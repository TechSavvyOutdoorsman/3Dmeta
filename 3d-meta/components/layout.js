import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Nav from '../components/Navbar'


const Layout = ({ children, router }) => {
    return (
        <Box as='main'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>METATECH Digital - Homepage</title>
                <link rel='shortcut icon' href='/images/orb-1.png' />
                <link rel='favicon' href='/images/orb-1.png' />
            </Head>
            <Nav path={router.asPath} /> 
            <Box p={0} m={0}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout