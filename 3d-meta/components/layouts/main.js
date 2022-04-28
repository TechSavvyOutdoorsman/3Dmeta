import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar'


export default function Layout ({ children, router }) {
    return (
        <Box as='main'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>METATECH Digital - Homepage</title>
                <link rel='shortcut icon' href='/orb.svg' />
            </Head>
                <Navbar path={router.asPath} /> 
                <Container
                    p={0}
                    m={0}
                >
                    {children}
                </Container>
        </Box>
    )
}
