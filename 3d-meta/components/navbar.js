import { useRef } from 'react'
import NextLink from 'next/link'
import Logo from './Logo'
import DrawerList from './DrawerList'
import CtaButton from './CtaButton'
import styled from '@emotion/styled'
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
    DrawerCloseButton,
    DrawerHeader,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react'

const NavIconContainer = styled.div`
    background: #FFFFFF;
    margin-right: 0.75rem;
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

const NavIconLongBar = styled.span`
    min-width: 100%;
    height: 1px;
    background: #262626;
    border-radius: 3px;
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
                            placement='right'
                        
                        >
                            <DrawerOverlay />
                            <DrawerContent
                                background='nav.500'
                                blur={0.8}
                            >

                                <DrawerHeader>
                                    <DrawerCloseButton color='mBlack.900' sx={{
                                        _focus: {
                                            ring: 1,
                                            ringColor: 'home.200'
                                        }
                                    }}/>
                                    
                                </DrawerHeader>

                                <DrawerBody
                                    mt={5}
                                    align='right'
                                    fontSize={21}
                                    pr={5}
                                    onClose={onClose}
                                    color={useColorModeValue('mono.900', 'mono.100')}
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
