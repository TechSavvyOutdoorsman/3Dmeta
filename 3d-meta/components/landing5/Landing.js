import { 
    Flex,
} from '@chakra-ui/react'


const LandingFive = () => {

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

        </Flex>
    )
}


export default LandingFive