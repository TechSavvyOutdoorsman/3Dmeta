import {
    Flex 
} from '@chakra-ui/react'
import Decor from './BgDecor'

const top = '/images/top-decor.png'
const btm = '/images/btm-decor.png'

const LandingThree = () => {
    return (
        <Flex 
            justify={{ base: 'space-between', md: 'space-evenly'}} 
            gap={{ base: '4rem', md: '3rem'}}
            align='center' 
            flexDir='column' 
            py='6rem' 
            px={6} 
            bg='bg.500'
        >
            {/* <Decor src={top} alt='Background decor image' width='1468' height='279' /> */}
            {/* <Decor src={btm} alt='Background decor image' width='' height='' /> */}
        
    </Flex>
    )
}

export default LandingThree