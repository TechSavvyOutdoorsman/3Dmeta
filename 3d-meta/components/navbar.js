import NextLink from 'next/link'
import Logo from './Logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const LinkItem = ({ href, path, children }) => {
    const inactiveColor = 'mWhite.200'
    const active = path === href
    return (
        <NextLink href={href}>
            <Link
                p={2}
                color={active ? 'meta.500' : inactiveColor}
                fontFamily='Nunito'
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props 

    return (
        <Box
        paddingY={{ base: 0, md: '.5rem' }}
        position='fixed'
        as='nav'
        w='100%'
        bg='none'
        // style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container
                display='flex'
                padding={{ base: '.25rem', md: '0' }}
                maxW='container.xl'
                display='flex'
            >
                <Flex
                align='center'
                mr={6}
                >
                    <Heading 
                    as='h1'
                    size='lg'
                    letterSpacing={'tighter'}>
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
                mt={{ base: 4, nmd: 0}}
                >
                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href='/posts' path={path}>
                        Posts
                    </LinkItem>
                </Stack>

            <Box flex={1} align='right'>

                <Box ml={2} display={{ base: 'inline-block', md: 'none'}}>
                    <Menu>
                        <MenuButton
                        as={IconButton} 
                        icon={<HamburgerIcon />}
                        variant='outline'
                        aria-label='Options'
                        />

                    <MenuList bg='mBlack.800' color='mWhite.100'>
                        <NextLink href='/' passHref>
                            <MenuItem as={Link}>Portfolio</MenuItem>
                        </NextLink>
                        <NextLink href='/works' passHref>
                            <MenuItem as={Link}>About</MenuItem>
                        </NextLink>
                        <NextLink href='/posts' passHref>
                            <MenuItem as={Link}>Start a Project</MenuItem>
                        </NextLink>
                        {/* <MenuItem as={Link} href='https://www.github.com/techsavvyoutdoorsman/brams-website'>View Source Code</MenuItem> */}
                        
                    </MenuList>
                    </Menu>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}

export default Navbar
