import { 
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react'
import MedHeading from '../MedHeading'
import Step from './Step'


const LandingTwo = () => {

    return (
        <Flex 
            justify={{ base: 'space-between', md: 'space-evenly'}} 
            gap={{ base: '4rem', md: '3rem'}}
            align='center' 
            flexDir='column' 
            paddingY='6rem' 
            paddingX={6} 
            bg='mWhite.100'
        >
            <MedHeading heading='Our Process Creates Consistent Results' headingColor='mBlack.900' subHead='PROCESS' subHeadColor='meta.500' />
            <Flex flexDir='column' gap={12}>
                <Flex flexDir={{ base: 'column', md: 'row'}} gap={12} justify='center'>
                    <Step number='1' heading='RESEARCH' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                    <Step number='2' heading='CONTENT' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                    <Step number='3' heading='discovery' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                </Flex>
                <Flex flexDir='column' gap={12} flexDir={{ base: 'column', md: 'row'}} justify='center'>
                    <Step number='4' heading='design' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                    <Step number='5' heading='Development' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                    <Step number='6' heading='release' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' />
                </Flex>
            </Flex>
        </Flex>
    )
}


export default LandingTwo