import { 
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react'


const LandingFour = () => {

    return (
        <Flex 
            justify={{ base: 'space-between', md: 'space-evenly'}} 
            gap={{ base: '4rem', md: '3rem'}}
            align='center' 
            flexDir={{ base: 'column-reverse', md: 'row' }} 
            paddingY={{ base: '12rem', md: '18rem' }} 
            paddingX={6} 
            bg='mBlack.900'
        >

        </Flex>
    )
}


export default LandingFour