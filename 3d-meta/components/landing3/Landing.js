import { 
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react'
import AppCanvas from './AppCanvas'

const LandingThree = () => {

    return (
        <Flex 
            justify={{ base: 'space-between', md: 'space-evenly'}} 
            gap={{ base: '4rem', md: '3rem'}}
            align='center' 
            flexDir={{ base: 'column-reverse', md: 'row' }} 
            paddingY={{ base: '6rem', md: '10rem' }} 
            paddingX={6} 
            bg='mBlack.900'
        >
            <Flex 
                flexDir='column' 
                maxW='350px' 
                align='left' 
                justify='left' 
                textAlign='left' 
                gap={6}
            >
                <Heading 
                    as='h2' 
                    fontSize={{ base: 'large', md: 'x-large'}} 
                    fontWeight='medium'
                    color='mWhite.100'
                >
                    Applications
                </Heading>
                <Text 
                    as='p' 
                    fontSize={{ base: 'medium', md: 'large'}} 
                    fontWeight='thin'
                    color='mWhite.100'
                >
                Developing websites is about so much more than marketing. 
                It’s also about aesthetics. For us, your site is the face of your company. 
                Let’s make it stunning.
                </Text>
            </Flex>
            <Flex h='300px' maxW='400px' align='center' justify='center'>
                <AppCanvas />
            </Flex>
        </Flex>
    )
}


export default LandingThree