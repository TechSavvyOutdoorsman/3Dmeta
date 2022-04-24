import { useRef, useContext } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
    Flex,
    Button,
    Box,
    Container,
    Heading, 
    Text, 
    
} from '@chakra-ui/react'

import NoSsr from '../No-Ssr'
import Space from './Space'

const Landing = () => {
    return (
        <Box
            h='100vh'
        >
            <NoSsr>
                <Space />
            </NoSsr>
        </Box>
    )
}

export default Landing