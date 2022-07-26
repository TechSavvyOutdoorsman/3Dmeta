import { Box } from '@chakra-ui/react'
import { useRef, Suspense, } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Float, Environment } from '@react-three/drei'
import { animated, } from '@react-spring/three'
import { Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const MetaSphere =  ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF("/threeD/metaSphere5.glb")

    return (
      <group scale={0.5} position={position} ref={group} {...props} dispose={null}>
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
        </group>
    )
}

const LightWhiteOrb = ({ props, position }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/white100orb.glb')
    
    return (
        <group ref={group} position={position} scale={0.6}  {...props} dispose={null}>
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
        <animated.group ref={group} position={position} scale={0.65}  {...props} dispose={null}>
            <Float
                speed={3}
                rotationIntensity={0.8}
                floatIntensity={1.1}
                floatingRange={[1, 12]}
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



const BackgroundCanvas = () => {
    
    return (
        <Box pos='absolute' top='0' right='0' w='100%' h='100%'>
            <Canvas>
                    <PerspectiveCamera makeDefault fov={15}>
                    <spotLight position={[-950, 900, 1500]} angle={1} penumbra={1} intensity={4} shadow-mapSize={[1024, 1024]} />
                    {/* <Environment preset='night' /> */}
                    <Suspense fallback={null}>
                        <FlexBox>
                            <MetaSphere position={[0, 0, -1400]} />
                            <BlackOrb position={[-30, 0, -700]} />
                            <GrayOrb position={[90, 80, -1905]} />
                            <WhiteOrb position={[-40, 110, -1905]} />
                            <LightWhiteOrb position={[50, -20, -1205]} />
                        </FlexBox>
                </Suspense> 
                    </PerspectiveCamera>
            </Canvas>
        </Box>
    )
}


useGLTF.preload(GLTFLoader, "/threeD/darkGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/lightGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/whiteOrb.glb")
useGLTF.preload(GLTFLoader, '/threeD/white100orb.glb')
useGLTF.preload(GLTFLoader, "/threeD/metaSphere5.glb");
export default BackgroundCanvas