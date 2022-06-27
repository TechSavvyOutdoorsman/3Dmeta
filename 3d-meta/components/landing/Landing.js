// import { useEffect, useRef } from 'react'
import {
    Flex,
    Spacer, 
    // Button,
    Heading,
    Box,
} from '@chakra-ui/react'
import LaptopCanvas from './LaptopCanvas'
import CtaButton from '../CtaButton'
// import { gsap } from 'gsap'
// import NoSsr from '../No-Ssr'


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
            h={{ base: '90vh', md: '100vh' }}
            direction='column'
            justify='space-between'
            paddingX={4}
            align='center'
            bg='bg.500'
        >
            <Flex
                pt={{ base: '5.5rem', md: '13rem' }}
                position='absolute'
                zIndex={1}
                gap={2}
                flexDir='column'
                textAlign='center'
            >
                <Heading
                    lineHeight={{ base: '32px', md: '65px' }}
                    as='h1'
                    color='mBlack.900'
                    fontSize={{ base: '32px', md: '64px' }}
                    fontWeight='bold'
                >
                    Custom Websites and Applications
                </Heading>
                <Heading
                    lineHeight={{ base: '20px', md: '24px' }}
                    as='h3'
                    color='mBlack.800'
                    fontSize={{ base: 'large', md: 'x-large' }}
                    fontWeight='medium'
                >
                    We&apos;re Here to Help You Dominate The Virtual Space
                </Heading>
                <Flex
                    mt={{ base: '1rem', }}
                    align='center'
                    justify='center'
                >
                    <CtaButton
                        scale={'scale(1.25)'}
                    >
                        Start a Project
                    </CtaButton>
                </Flex>
            </Flex>
            <Spacer />
            <Box
                pb={8}
                align='center'
                h={{ base: '40%', md: '60%' }}
            >
                <LaptopCanvas />
            </Box>
        </Flex>
    )
}

export default Landing