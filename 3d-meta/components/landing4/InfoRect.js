import {
    Box,
    Flex,
    Heading,
    Text,
    Image
} from '@chakra-ui/react'

const InfoRect = ({ heading, text, src, alt }) => {

    return (
        <Flex flexDir='column' borderRadius='30px' p={6}  bg='mBlack.800' maxW='350px'>
            <Box mb={3} w='30px' h='30px'>
                <Image src={src} alt={alt} />
            </Box>
            <Heading mb={6} as='h3' color='mWhite.100' fontSize='x-large' fontWeight='medium'>{heading}</Heading>
            <Text as='p' color='mWhite.100' fontSize='medium' fontWeight='light'>{text}</Text>
        </Flex>
    )
}

export default InfoRect