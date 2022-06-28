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
    useColorModeValue

} from '@chakra-ui/react'


const NavIconWrapper = styled.span`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 1.5rem;
    margin-right: 0.75rem;
    transform: scale(-1, 1);

    @media(min-width: 885px){
        display: none;
    }
`

const NavIconLongBar = styled.span`
    min-width: 100%;
    height: 3px;
    background: #262626;
    border-radius: 3px;
`

const NavIconShortBar = styled.span`
    max-width: 0.95rem;
    height: 3px;
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
            paddingY={{ base: 0, md: '.5rem' }}
            position='fixed'
            as='nav'
            w='100%'
            bg='nav.500'
            zIndex={5}
            boxShadow='0 0.125rem .25rem #C8C8C8'
            style={{ 
                backdropFilter: 'blur(10px)', 
                WebkitBackdropFilter: 'blur(10px)',
                '&(maxWidth: 599px)': {
                    height: '50%',
                }
            }}
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

                <Box flex={1} align='right'>
                    

                    <Box ml={2} pt={1.75} display={{ base: 'inline-block', md: 'none' }}>
                        
                        <NavIconWrapper ref={btnRef} onClick={onOpen} aria-label='Open Menu'>
                                <NavIconLongBar />
                                <NavIconLongBar />
                                <NavIconShortBar />
                            {/* <IconButton  ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} variant='ghost' aria-label='Open Menu' /> */}
                        </NavIconWrapper>

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
