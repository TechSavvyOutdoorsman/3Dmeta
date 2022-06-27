import { useEffect, useRef } from 'react'
import {
    Flex,
    Button,
    Heading, 
} from '@chakra-ui/react'
import CtaButton from '../CtaButton'
import { gsap } from 'gsap'
import NoSsr from '../No-Ssr'


const Landing = () => {
    
    // const tl1 = useRef()
    // const heading1 = useRef()
    // const heading2 = useRef()
    // const heading3 = useRef()
    
    // useEffect(() => {
    //     let tl1 = new gsap.timeline()

    //     tl1.from(heading1.current, {
    //         opacity: 0,
    //         duration: 0.5,
    //         delay: 1.5
    //     })
    //     tl1.from(heading2.current, { 
    //         opacity: 0,
    //         duration: 0.5, 
    //     })
    //     tl1.from(heading3.current, { 
    //         opacity: 0,
    //         duration: 0.5, 
    //     })
    // }, [])

    return (
        <Flex
            h={{ base: '90vh', md: '100vh'}}
            flexDir='column'
            align='center'
            justify={{ base: 'space-between', md: 'space-between' }}
            bg='bg.500'
            >
            <Flex pt={{ base: '8rem', md: '13rem' }} paddingX={4} position='absolute' zIndex={1} gap={2} flexDir='column' textAlign='center'>
                <Heading lineHeight={{ base: '40px', md: '65px' }} as='h1' color='mBlack.900' fontSize={{ base: '40px', md: '64px'}} fontWeight='bold'>We Create Unparalled Digital Experiences</Heading>
                <Heading lineHeight={{ base: '20px', md: '24px' }} as='h3' color='mBlack.900' fontSize={{ base: 'large', md: 'x-large' }} fontWeight='medium'>Web Applications & Custom Software Solutions That Dominate The Virtual Space.</Heading>
                <Flex mt={8} align='center' justify='center'>
                    <CtaButton scale={'scale(1.5)'}>Start a Project</CtaButton>                             
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Landing