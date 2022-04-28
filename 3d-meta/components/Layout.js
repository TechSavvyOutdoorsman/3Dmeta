import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'


function Layout({ children, router }) {
    return (
        <Box p={0} m={0}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>METATECH Digital - Homepage</title>
                <link rel='shortcut icon' href='/orb.svg' />
            </Head>
                <Navbar path={router.asPath} /> 
                <main>
                    {children}
                </main>
        </Box>
    )
}

export default Layout