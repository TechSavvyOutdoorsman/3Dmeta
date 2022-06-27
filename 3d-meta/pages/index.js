import { 
  Flex,
} from '@chakra-ui/react'
import Landing from '../components/landing/Landing'
import LandingTwo from '../components/landing2/Landing'


export default function Home() {
  return (
    <Flex
      flexDir='column'
      id='container'
    >
      <Landing />
      <LandingTwo />
    </Flex>
  )
}
