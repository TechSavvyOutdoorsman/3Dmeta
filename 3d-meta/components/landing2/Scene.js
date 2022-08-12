
import {
    Spinner
} from '@chakra-ui/react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Loading = () => {
    return (
        <Html as='div' m='auto' pos='relative'>
            <Spinner
                size='xl'
                pos='absolute'
                left='50%'
                top='50%'
                ml='calc(0px - var(--spinner-size) / 2)'
                mt='calc(0px - var(--spinner-size))'
                scale='5'
            />
        </Html>
    )
}

const Scene = ({ children }) => {
    return (
        <>
            <Canvas>
                <Suspense fallback={<Loading />} >
                    {children}
                </Suspense>
            </Canvas>
        </>
    )
}

export default Scene 