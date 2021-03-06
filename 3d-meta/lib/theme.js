import { extendTheme } from '@chakra-ui/react'


const components = { 
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffest: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        color: '#496DDB',
        textUnderlineOffest: 3 
    }
}

const fonts = { 
    heading: "'Nunito'",
    body: "'Nunito'",
}

const colors = {
    mHighlight: {
        100: '#CECCF8',
        200: '#B9B8D3',
        400: '#A8C8DE',
        500: '#759FBC',
        600: '#447293',
        800: '#470FF4'
    },
    meta: {
        400: '#E74444',
        500: '#AF0000',
        600: '#7A0000'
    },
    mWhite: {
        100: '#FFFFFF',
        200: '#EFEFEF',
        300: '#999999',
        400: '#747474'
    },
    mBlack: {
        800: '#49443A',
        850: '#39362F',
        900: '#080705'
    },
    nav: {
        500: '#D9D9D9',
        550: '#C8C8C8',
    },
    bg: {
        500: '#D0D0D0'
    }
}

const colorScheme = {
    glassTeal: '#CAFFB9',
}


const theme = extendTheme({
    components,
    colors, 
    colorScheme,
    fonts
})

export default theme