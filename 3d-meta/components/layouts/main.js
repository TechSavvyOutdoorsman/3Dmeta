import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar'


const Main = ({ children, router }) => {
    return (
        <Box as='main'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>METATECH Digital - Homepage</title>
                <link rel='shortcut icon' href='/orb.svg' />
            </Head>
                <Navbar path={router.asPath} /> 
                <Box
                w='100%'
                h='100%'
                // pt={{ base: '20px', md: '65px' }}           
                >
                    {children}
                </Box>
        </Box>
    )
}

export default Main