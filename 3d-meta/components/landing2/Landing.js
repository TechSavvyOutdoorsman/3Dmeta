import { 
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react'
import LaptopCanvas from './LaptopCanvas'

const LandingTwo = () => {

    return (
        <Flex 
            justify={{ base: 'space-between', md: 'space-evenly'}} 
            gap={{ base: '6rem', md: '3rem'}}
            align='center' 
            flexDir={{ base: 'column', md: 'row' }} 
            paddingY={{ base: '12rem', md: '18rem' }} 
            paddingX={6} 
            bg='mBlack.900'
        >
            <Flex h='300px' maxW='400px' align='center' justify='center'>
                <LaptopCanvas />
            </Flex>
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
                    Websites
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
        </Flex>
    )
}


export default LandingTwo