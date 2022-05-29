import { 
  Flex,
} from '@chakra-ui/react'
import Landing from '../components/landing/Landing'
import LandingTwo from '../components/landing2/Landing'
import LandingThree from '../components/landing3/Landing'
import Landingfour from '../components/landing4/Landing'

export default function Home() {
  return (
    <Flex
    flexDir='column'
    id='container'
    m={0}
    p={0}
    >
      <Landing />
      <LandingTwo />
      <LandingThree />
      <Landingfour />
    </Flex>
  )
}
