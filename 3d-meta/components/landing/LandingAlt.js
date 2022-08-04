import { useRef, useEffect } from 'react'
import {
    Flex,
    Heading,
    Box,
} from '@chakra-ui/react'
import BackgroundCanvas from './Blob'
import CtaButton from '../CtaButton'
import { gsap } from 'gsap'


const LandingAlt = () => {

    const heading1 = useRef()

    useEffect(() => {
        let tl1 = new gsap.timeline()

        tl1.from(heading1.current, {
            y: 10,
            duration: 0.2,
            delay: 1,
            ease: 'power4.easeOut'
        })
    }, [])

    return (
        <Flex
            h={{ base: '85vh', md: '100vh' }}
            flexDir='column'
            bg='bg.500'
            pos='relative'
        >
                <BackgroundCanvas  />
            <Flex
                flex={1}
                mb={{ base: '1rem', lg: '3rem'}}
                gap={{ base: '1rem', md: '2rem', xl: '4rem' }}
                px={{ base: '1rem', lg: '2rem', xl: '6rem' }}
                pb={{ base: '1rem', lg: '2rem', xl: '3rem'}}
                flexDir='column'
                textAlign='left'
                align='left'
                justify='flex-end'
                zIndex={1}
                // maxW={{ base: 'container.md', md: 'container.md', xl: 'container.xl' }}
            >
                <Box>
                    <Heading
                        as='h1'
                        ref={heading1}
                        // maxW={{ base: '300px', lg: '750px'}}
                        lineHeight={{ base: '45px', md: '65px', xl: '170px' }}
                        fontSize={{ base: '45px', md: '64px', xl: '200px' }}
                        color='mBlack.900'
                        fontWeight='bold'
                    >
                        Websites & Applications
                    </Heading>
                </Box>
                <Box align='left' maxW={{ base: '300px', md: 'container.sm'}} >
                    <Heading
                        lineHeight={{ base: '20px', md: '24px' }}
                        as='h3'
                        color='mBlack.800'
                        fontSize={{ base: 'large', md: 'x-large', }}
                        fontWeight='medium'
                    >
                        We&apos;re Here to Help You Dominate The Virtual Space. This is an area that I could use some work in.
                    </Heading>
                </Box>
                <Box
                    pl={{ md: '1rem', xl: '4rem'}}
                >
                    <CtaButton
                        scale={{ base: 'scale(1)', md: 'scale(1.25)', xl: 'scale(2)'}}
                    >
                        Start a Project
                    </CtaButton>
                </Box>
            </Flex>
        </Flex>
    )
}

export default LandingAlt