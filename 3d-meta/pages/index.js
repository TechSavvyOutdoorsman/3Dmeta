import { 
  Flex,
} from '@chakra-ui/react'
import Landing from '../components/landing/Landing'
import LandingTwo from '../components/landing2/Landing'
import LandingThree from '../components/landing3/Landing'
import LandingFour from '../components/landing4/Landing'
import LandingFive from '../components/landing5/Landing'

export default function Home() {
  return (
    <Flex
      flexDir='column'
      id='container'
    >
      <Landing />
      <LandingTwo />
      <LandingThree />
      <LandingFour />
      <LandingFive />
    </Flex>
  )
}
