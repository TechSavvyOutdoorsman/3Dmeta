import { useRef, Suspense,  } from 'react'
import { Canvas, } from '@react-three/fiber'
import { useGLTF, Environment, PerspectiveCamera, Float  } from '@react-three/drei'
import { useSpring, animated, easings } from '@react-spring/three'
import { Flex, Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBA_ASTC_10x10_Format } from 'three'



const LightWhiteOrb = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/white100orb.glb')
    
    return (
        <group ref={group} position={[190, 70, -240]} scale={0.6}  {...props} dispose={null}>
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
                />
            </Float>
        </group>
    )
}

const WhiteOrb = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/whiteOrb.glb')

    return (
        <animated.group ref={group} position={[40, 60, -260]} scale={0.85}  {...props} dispose={null}>
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

const LightGrayOrb = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/lightGrayOrb.glb')

    return (
        <animated.group ref={group} position={[110, -60, -225]} scale={1.2} {...props} dispose={null}>
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
            />
            </Float>
        </animated.group>
    )
}

const DarkGrayOrb = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/darkGrayOrb.glb')

    return (
        <animated.group ref={group} position={[210, 190, -400]} scale={0.65} {...props} dispose={null}>
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
            />
            </Float>
        </animated.group>
    )
}



const BackgroundCanvas = () => {
    
    return (
        <>
            <Canvas>
                    <PerspectiveCamera makeDefault fov={75}>
                        <spotLight position={[-600, 500, 20]} angle={15} penumbra={1} intensity={2} shadow-mapSize={[1024, 1024]} />
                    </PerspectiveCamera>
                    <Suspense fallback={null}>
                            <FlexBox>
                                <DarkGrayOrb />
                                <LightGrayOrb />
                                <WhiteOrb />
                                <LightWhiteOrb />
                            </FlexBox>
                </Suspense>
            </Canvas>
        </>
    )
}


useGLTF.preload(GLTFLoader, "/threeD/darkGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/lightGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/whiteOrb.glb")
useGLTF.preload(GLTFLoader, '/threeD/white100orb.glb')
export default BackgroundCanvas