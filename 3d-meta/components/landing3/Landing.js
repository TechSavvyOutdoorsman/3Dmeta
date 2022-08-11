import {
    Flex,
} from '@chakra-ui/react'
import MedHeading from '../MedHeading'




const LandingThree = () => {
    return (
        <>
            <Flex 
                align='center' 
                flexDir='column' 
                py={{ base: '8rem', xl: '12rem'}}
                mt={{ base: '5rem', xl: '12rem'}}
                mb={{ base: '8rem', xl: '12rem' }}
                px={12} 
                bg='mBlack.800'
                pos='relative'
                transform='skewY(8deg)'
            >
                <Flex
                    transform='skewY(-8deg)'
                    pos='relative'
                    margin='0 auto'
                    justify='center'
                    align='left'
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