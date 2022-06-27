import {
    Text,
    Button
} from '@chakra-ui/react'

const CtaButton = ({ children, scale }) => {
    
    return (
        <Button
            bg='meta.500'
            p={4}
            borderRadius='30px'
            color='mWhite.100'
            transform={scale}
            boxShadow='0 0.25rem .5rem #AFAFAF'
            _hover={{
                bg: 'meta.400',
                color: 'mBlack.900'
            }}
        >
            <Text
                fontFamily='heading'
                fontWeight='bold'
                fontSize='16'
            >
                {children}
            </Text>
        </Button>
    )
}

export default CtaButton