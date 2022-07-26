import { 
  Flex,
} from '@chakra-ui/react'
// import Landing from '../components/landing/Landing'
import LandingAlt from '../components/landing/LandingAlt'
import LandingTwo from '../components/landing2/Landing'
import LandingThree from '../components/landing3/Landing'


export default function Home() {
  return (
    <Flex
      flexDir='column'
      id='container'
      bg='bg.500'
    >
      <LandingAlt />
      <LandingTwo />
      <LandingThree />
    </Flex>
  )
}
