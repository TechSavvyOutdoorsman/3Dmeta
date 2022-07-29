import { useEffect, useRef } from 'react'
import {
    Flex,
    Spacer, 
    Heading,
    Box,
} from '@chakra-ui/react'
import LaptopCanvas from './LaptopCanvas'
import CtaButton from '../CtaButton'
import { gsap } from 'gsap'
import NoSsr from '../No-Ssr'


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
            delay: 1.5,
            ease: 'power1.easeOut'
        })
        tl1.from(heading2.current, { 
            opacity: 0,
            duration: 0.5,
            ease: 'power1.easeOut'
        })
        tl1.from(heading3.current, { 
            opacity: 0,
            duration: 0.5,
            ease: 'power1.easeOut'
        })
    }, [])

    return (
        <Flex
            h={{ base: '90vh', md: '100vh' }}
            direction='column'
            align='center'
            px={4}
            pt='5rem'
            pb='2rem'
            bg='bg.500'
            sx={{
                '@media (min-height: 600px)': {
                    paddingTop: '9rem',
                    paddingBottom: '5rem'
                },
                '@media (min-width: 48em)': {
                    paddingTop: '14rem'
                }
            }}
        >
            <Flex
                // pt={{ base: '5.5rem', md: '13rem' }}
                paddingX={2}
                zIndex={1}
                gap={2}
                flexDir='column'
                textAlign='center'
                align='center'
                justify='center'
            >
                <Heading
                    as='h1'
                    ref={heading1}
                    lineHeight={{ base: '32px', sm: '42px', md: '65px' }}
                    color='mBlack.900'
                    fontSize={{ base: '32px', md: '64px' }}
                    fontWeight='bold'
                >
                    Custom Websites and Applications
                </Heading>
                <Box maxW={{ base: '250px', md: '100%'}} >
                    <Heading
                        ref={heading2}
                        lineHeight={{ base: '20px', md: '24px' }}
                        as='h3'
                        color='mBlack.800'
                        fontSize={{ base: 'large', md: 'x-large' }}
                        fontWeight='medium'
                    >
                        We&apos;re Here to Help You Dominate The Virtual Space
                    </Heading>
                </Box>
                <Flex
                    ref={heading3}
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
                align='center'
                h={{ base: '45%', md: '60%' }}
                w='100%'
            >
                <NoSsr>
                    <LaptopCanvas />
                </NoSsr>
            </Box>
        </Flex>
    )
}

export default Landing