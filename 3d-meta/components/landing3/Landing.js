import {
    Flex,
} from '@chakra-ui/react'
import MedHeading from '../MedHeading'




const LandingThree = () => {
    return (
        <>
            <Flex 
                // justify={{ base: 'space-between', md: 'space-evenly'}} 
                // gap={{ base: '4rem', md: '3rem'}}
                align='center' 
                flexDir='column' 
                py={{ base: '8rem', xl: '12rem'}}
                // my='2rem'
                mt={{ base: '5rem', xl: '12rem'}}
                mb={{ base: '8rem', xl: '12rem' }}
                // px={6} 
                bg='mBlack.800'
                pos='relative'
                transform='skewY(8deg)'
            >
                <Flex
                    transform='skewY(-8deg)'
                    bg='bg.500'
                    pos='relative'
                    margin='0 auto'
                    maxWidth='50em'
                    justify='center'
                    align='center'
                    bg='mBlack.800'
                    maxW='container.xl'
                >
                    <MedHeading heading='What Some Awesome People Had To Say' subHead='CUSTOMERS' headingColor='mWhite.100' subHeadColor='meta.500' />
                </Flex>
            </Flex>

        </>    
    )
}

export default LandingThree