import Head from 'next/head'
import Navbar from './Navbar'


function Layout({ children, router }) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>METATECH Digital - Homepage</title>
                <link rel='shortcut icon' href='/orb.svg' />
            </Head>
            <Navbar path={router.asPath} /> 
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout