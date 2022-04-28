import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'


function MyApp({ Component, pageProps, router  }) {
  return ( 
    <ChakraProvider theme={theme}>
    <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
