import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import Fonts from '../components/fonts.js' 
import theme from '../lib/theme'


function MyApp({ Component, pageProps, router }) {
  return ( 
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router} key={router.route}>
        <Component {...pageProps}  />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
