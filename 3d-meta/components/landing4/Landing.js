import {
    Box,
    Image,
    Flex,
} from '@chakra-ui/react'
import InfoRect from './InfoRect'


const SvgHolder = ({ src, alt }) => {
    
    return (
        <Box p={0} m={0} minW='100%' >
            <Image layout='fill' src={src} alt={alt} />
        </Box>
    )
}


const LandingFour = () => {

    return (
        <Box m={0} p={0} bg='mBlack.900' >
            <SvgHolder src='/images/gray-spacer-top2.svg' alt='Top of grey background image' />
            <Flex
                flexDir='column'
                align='center'
                justify='center'
                bg='mBlack.850'
                gap={8}
                paddingY={{ base: '6rem', md: '10rem' }} 
            >
                
                <Flex 
                    justify='center'
                    gap={8}
                    align='center' 
                    flexDir={{ base: 'column', md: 'row' }} 
              
                >
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                </Flex>
                <Flex 
                    justify='center'
                    gap={8}
                    align='center' 
                    flexDir={{ base: 'column', md: 'row' }} 
                >
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                    <InfoRect src='/images/red-plus.svg' alt='Red Plus' heading='Lightning Fast' text='This is what the text should say but I honestly have no idea what this will look like.' />
                </Flex>
            </Flex>
            <SvgHolder src='/images/gray-spacer-btm2.svg' alt='Bottom of grey background image' />
        </Box>
    )
}


export default LandingFour