import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/main'
import Fonts from '../lib/fonts'
import theme from '../lib/theme'


function MyApp({ Component, pageProps, router  }) {
  return ( 
    <ChakraProvider theme={theme}>
    <Fonts />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
