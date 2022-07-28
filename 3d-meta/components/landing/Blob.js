import { Box } from '@chakra-ui/react'
import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Float, useProgress, Html } from '@react-three/drei'
import { Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { animated, } from '@react-spring/three'
import NoSsr from '../No-Ssr'
import useMediaQuery from '../../hooks/useMediaQuery'


const MetaSphere =  ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF("/threeD/metaSphere5.glb")

    return (
        <group scale={0.5} position={position} ref={group} {...props} dispose={null}>
            <Float
                speed={4}
                rotationIntensity={1.5}
                floatIntensity={2}
                floatingRange={[5, 15]}
            >

                <group
                        position={[2.07, 0.39, 0.02]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={1}
                    >
                        <mesh
                        geometry={nodes["Sphere_6_-_baked"].geometry}
                        material={materials["London 1"]}
                        position={[1.93, 0.3, 54.49]}
                        />
                        <mesh geometry={nodes.Sphere_2.geometry} material={materials.London} />
                </group>
            </Float>
        </group>
    )
}

const LightWhiteOrb = ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/white100orb.glb')
    
    return (
        <group ref={group} position={position} scale={0.55}  {...props} dispose={null}>
            <Float
                speed={4}
                rotationIntensity={1.2}
                floatIntensity={1.4}
                floatingRange={[1, 8]}
            >
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials.Shelton}
                    position={[-0.0662462, 0, 0.30364563]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}      
                >
                </mesh>
            </Float>
        </group>
    )
}

const WhiteOrb = ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/whiteOrb.glb')



    return (
        <animated.group ref={group} position={position} scale={0.4}  {...props} dispose={null}>
            <Float
                speed={5}
                rotationIntensity={1.4}
                floatIntensity={1.5}
                floatingRange={[3, 15]}
            >
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials.Shelton}
                    position={[-0.0662462, 0, 0.30364563]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}      
                />
            </Float>
        </animated.group>
    )
}

const GrayOrb = ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/lightGrayOrb.glb')

    return (
        <group ref={group} position={position} scale={.5} {...props} dispose={null}>
            <Float
                speed={4}
                rotationIntensity={1.5}
                floatIntensity={1.4}
                floatingRange={[1, 5]}
            >
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials.Shelton}
                    position={[-0.0662462, 0, 0.30364563]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                >

                </mesh>
            </Float>
        </group>
    )
}

const BlackOrb = ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/darkGrayOrb.glb')

    return (
        <group ref={group} position={position} scale={0.25} {...props} dispose={null}>
            <Float
                speed={6}
                rotationIntensity={1}
                floatIntensity={0.7}
                floatingRange={[1, 4]}
            >
                <mesh
                    geometry={nodes.Sphere.geometry}
                    material={materials.Shelton}
                    position={[-0.0662462, 0, 0.30364563]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1}
                ></mesh>
            </Float>
        </group>
    )
}


const ModelContainer = () => {

    const isDesktop = useMediaQuery('(min-width: 62em')

    return (
        <animated.group>
            <MetaSphere position={isDesktop ? [120, 0, -1400] : [0, 0, -1400]} />
            <BlackOrb position={isDesktop ? [30, 0, -700] : [-30, 0, -700]} />
            <GrayOrb position={isDesktop ? [70, 100, -1300] : [-50, 100, -1300]} />
            <GrayOrb position={isDesktop ? [240, 80, -1900] : [90, 80, -1905]} />
            <WhiteOrb position={isDesktop ? [155, 100, -1305] : [40, 100, -1305]} />
            <WhiteOrb position={isDesktop ? [80, 110, -1905] : [-40, 110, -1905]} />
            <LightWhiteOrb position={isDesktop ? [160, -20, -1205] : [50, -20, -1205]} />  
        </animated.group>
    )
}

const Loader = () => {
    const { progress } = useProgress()
    // active, errors, items, loaded, total
    return <Html center>{progress} & loaded</Html>
}

const BackgroundCanvas = ({ props }) => {

    
    return (
        <Box pos='absolute' top='0' right='0' w='100%' h='100%' {...props}>
            <NoSsr>
                <Canvas>
                    <Suspense fallback={<Loader />}>
                        {/* <Preload all /> */}
                        <spotLight position={[-950, 900, 1500]} angle={1} penumbra={1} intensity={4} shadow-mapSize={[1024, 1024]} />
                        <PerspectiveCamera makeDefault fov={15}>
                            <FlexBox>
                                <ModelContainer />
                            </FlexBox>
                        </PerspectiveCamera>
                    </Suspense> 
                </Canvas>
            </NoSsr>
        </Box>
    )
}


useGLTF.preload(GLTFLoader, "/threeD/darkGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/lightGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/whiteOrb.glb")
useGLTF.preload(GLTFLoader, '/threeD/white100orb.glb')
useGLTF.preload(GLTFLoader, "/threeD/metaSphere5.glb");
export default BackgroundCanvas