
import {
    Flex,
    Button,
    Heading, 
} from '@chakra-ui/react'
import NoSsr from '../No-Ssr'
import Space from './Space'

const Landing = () => {


    return (
        <Flex
            h='100vh'
            flexDir='column'
            align='center'
            justify='center'
        >
            <Flex m='auto' p={4} position='absolute' zIndex={1} gap={2} flexDir='column' textAlign='center'>
                <Heading lineHeight='32px' as='h1' color='mWhite.100' fontSize='xx-large'>We Create Unparalled Digital Experiences</Heading>
                <Heading lineHeight='20px' as='h3' color='mWhite.200' fontSize='large' fontWeight='medium'>Web Applications & Custom Software Solutions That Dominate The Virtual Space.</Heading>
                <Flex gap={2} pt={2} align='center' justify='center'>
                    <Button variant='solid' bg='meta.500' color='mWhite.100'>Start a Project</Button>                    
                    <Button variant='solid' bg='mWhite.100' color='mBlack.900'>Start a Project</Button>                    
                </Flex>
            </Flex>
            <NoSsr>
                <Space zIndex={0} />
            </NoSsr>
        </Flex>
    )
}

export default Landing