import { useEffect, useRef } from 'react'
import {
    Flex,
    Button,
    Heading, 
} from '@chakra-ui/react'
import { gsap } from 'gsap'
import NoSsr from '../No-Ssr'
import Space from './Space'

const Landing = () => {
    
    // const tl1 = useRef()
    const heading1 = useRef()
    const heading2 = useRef()
    const heading3 = useRef()
    
    useEffect(() => {
        let tl1 = new gsap.timeline()

        tl1.from(heading1.current, {
            opacity: 0,
            duration: 0.5,
            delay: 1.5
        })
        tl1.from(heading2.current, { 
            opacity: 0,
            duration: 0.5, 
        })
        tl1.from(heading3.current, { 
            opacity: 0,
            duration: 0.5, 
        })
    }, [])

    return (
        <Flex
            h={{ base: '90vh', md: '100vh'}}
            flexDir='column'
            align='center'
            justify={{ base: 'space-between', md: 'center' }}
            bg='mBlack.900'
            >
            <Flex pt={{ base: '8rem', md: '0' }} paddingX={4} position='absolute' zIndex={1} gap={2} flexDir='column' textAlign='center'>
                <Heading ref={heading1} lineHeight={{ base: '32px', md: '47px' }} as='h1' color='mWhite.100' fontSize={{ base: 'xx-large', md: 'xxx-large'}}>We Create Unparalled Digital Experiences</Heading>
                <Heading ref={heading2} lineHeight={{ base: '20px', md: '24px' }} as='h3' color='mWhite.200' fontSize={{ base: 'large', md: 'x-large' }} fontWeight='medium'>Web Applications & Custom Software Solutions That Dominate The Virtual Space.</Heading>
                <Flex ref={heading3} gap={2} pt={2} align='center' justify='center'>
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