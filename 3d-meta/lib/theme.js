import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: props => ({
        body: {
            bg: '#080705'
        }
    })
}

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
        baseStyle: props => ({
            color: '#496DDB',
            textUnderlineOffest: 3 
        })
    }
}

const fonts = { 
    heading: "'Nunito'",
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
        500: '#AF0000',
        600: '#7A0000'
    },
    mWhite: {
        100: '#FFFFFF',
        200: '#EFEFEF'
    },
    mBlack: {
        800: '#49443A',
        900: '#080705'
    }
}

const colorScheme = {
    glassTeal: '#CAFFB9',
}


const theme = extendTheme({
    styles,
    components,
    colors, 
    colorScheme,
    fonts
})

export default theme