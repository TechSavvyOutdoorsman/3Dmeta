import { useRef, useEffect } from 'react'
import NextLink from 'next/link'
import Logo from './Logo'
import DrawerList from './DrawerList'
import CtaButton from './CtaButton'
import styled from '@emotion/styled'
import { gsap} from 'gsap'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerHeader,
    useDisclosure,
} from '@chakra-ui/react'

const NavIconContainer = styled.div`
    background: #FFFFFF;
    margin-right: 1rem;
    border-radius: 100%;
    padding: .75rem;
    width: 40px;
    height: 40px;

`


const NavIconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1rem;
    height: 1rem;
    gap: 0.15rem;
    transform: scale(-1, 1);

`

const CloseNavIconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1rem;
    height: 1rem;
    transform: scale(-1, 1);

`


const NavIconLongBar = styled.span`
    min-width: 100%;
    height: 1px;
    background: #262626;
    border-radius: 3px;
`

const CloseNavIconLeftBar = styled.span`
    min-width: 100%;
    height: 1px;
    background: #262626;
    border-radius: 3px;
    transform: rotate(-45deg);
`

const CloseNavIconRightBar = styled.span`
    min-width: 100%;
    height: 1px;
    background: #262626;
    border-radius: 3px;
    transform: rotate(45deg);
`



const LinkItem = ({ href, path, children }) => {
    const inactiveColor = 'mBlack.900'
    const active = path === href
    return (
        <NextLink href={href} passHref>
            <Link
                pr={4}
                pl={4}
                color={active ? 'meta.500' : inactiveColor}
                fontFamily='heading'
                fontWeight='bold'
                fontSize='16px'
                borderRadius='30px'
                _hover={{
                    textStyle: 'none',
                    bg: 'mWhite.100'
                }}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const linkBarRef = useRef()

    useEffect(() => {
        let tl1 = new gsap.timeline()

        tl1.from(linkBarRef.current, {
            y: -100,
            duration: 0.25,
            delay: 1,
            ease: 'bounce.easeOut'
        })
    }, [])


    return (
        <Box
            paddingY={{ base: '1.5rem', md: '.75rem' }}
            position='fixed'
            as='nav'
            w='100%'
            zIndex={5}
            // bg='nav.500'
            // boxShadow='0 0.125rem .25rem #C8C8C8'
            // style={{ 
            //     backdropFilter: 'blur(10px)', 
            //     WebkitBackdropFilter: 'blur(10px)',
            //     '&(maxWidth: 599px)': {
            //         height: '50%',
            //     }
            // }}
            {...props}
        >
            <Container
                display='flex'
                padding={{ base: '.25rem', md: '0' }}
                maxW='container.xl'
            >
                <Flex
                    align='center'
                    mr={6}
                >
                    <Heading 
                        as='h1'
                        size='lg'
                        letterSpacing='tighter'
                    >
                        <Logo /> 
                    </Heading>
                </Flex>

                <Stack
                    ref={linkBarRef}
                    direction={{ base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    justify='flex-end'
                    width='100%'
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                    mr={4}
                >
                    <LinkItem href='/works' path={path}>
                        Portfolio
                    </LinkItem>
                    <LinkItem href='/posts' path={path}>
                        Contact
                    </LinkItem>
                    <CtaButton>Start a Project</CtaButton>
                </Stack>

                <Box flex={1} align='right' pt={1}>
                    
                    <Box display={{ base: 'contents', md: 'none' }}>
                        <NavIconContainer  ref={btnRef} onClick={onOpen} aria-label='Open Menu'>
                            <NavIconWrapper >
                                <NavIconLongBar />
                                <NavIconLongBar />
                            </NavIconWrapper>
                        </NavIconContainer>

                        <Drawer
                            isOpen={isOpen}
                            onClose={onClose}
                            placement='bottom'
                            size='full'
                        >
                            <DrawerOverlay />
                            <DrawerContent
                                background='meta.600'
                                blur={0.8}
                            >

                                <DrawerHeader pos='absolute' right='-5' top='5' >
                                <NavIconContainer  ref={btnRef} onClick={onClose} aria-label='Open Menu'>
                                    <CloseNavIconWrapper >
                                        <CloseNavIconLeftBar />
                                        <CloseNavIconRightBar />    
                                    </CloseNavIconWrapper>
                                </NavIconContainer>
              
                                    
                                </DrawerHeader>

                                <DrawerBody
                                    mt={5}
                                    align='left'
                                    fontSize={21}
                                    pr={5}
                                    py={5}
                                >

                                    <DrawerList onClose={onClose}  />

                                </DrawerBody>

                            </DrawerContent>

                        </Drawer>
                
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
