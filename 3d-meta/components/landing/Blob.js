import { useRef, Suspense,  } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, Float, Sphere, useTexture } from '@react-three/drei'
import { animated, } from '@react-spring/three'
import { Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const ThreeOrb = (props) => {
    const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useTexture([
        '/threeD/textures/Metal2/color.jpg',
        '/threeD/textures/Metal2/displacement.jpg',
        '/threeD/textures/Metal2/normal.jpg',
        '/threeD/textures/Metal2/roughness.jpg',
        '/threeD/textures/Metal2/metalness.jpg',
    ])


    return (
        <Sphere position={[-2, 2, -8]} scale={1}>
            <meshPhongMaterial color='#747474' map={colorMap} displacementScale={0} normalScale={0.1} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} metalnessMap={metalnessMap} />
        </Sphere> 
    )
}
const TwoOrb = (props) => {
    const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useTexture([
        '/threeD/textures/Metal2/color.jpg',
        '/threeD/textures/Metal2/displacement.jpg',
        '/threeD/textures/Metal2/normal.jpg',
        '/threeD/textures/Metal2/roughness.jpg',
        '/threeD/textures/Metal2/metalness.jpg',
    ])


    return (
        <Sphere position={[0, 0, -15]} scale={2}>
            {/* <ambientLight color='#ffffff' intensity={3} /> */}
            <meshPhongMaterial color='#49443A' emissive='#48443A' shininess={1} displacementScale={0.1} normalScale={0.1} map={colorMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} metalnessMap={metalnessMap} />
        </Sphere> 
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
        <animated.group ref={group} position={position} scale={0.85}  {...props} dispose={null}>
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
        <group ref={group} position={position} scale={1} {...props} dispose={null}>
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
        <group ref={group} position={position} scale={0.65} {...props} dispose={null}>
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
        <>
            <Canvas>
                    <PerspectiveCamera makeDefault fov={75}>
                        <spotLight position={[-950, 900, 1500]} angle={1} penumbra={1} intensity={10} shadow-mapSize={[1024, 1024]} />
                    </PerspectiveCamera>
                    <Suspense fallback={null}>
                    <FlexBox>
                            {/* <TwoOrb /> */}
                            {/* <ThreeOrb /> */}
                            <BlackOrb position={[20, 0, -270]} />
                            <BlackOrb position={[210, 190, -400]} />
                            <GrayOrb position={[100, -40, -185]} />
                            <WhiteOrb position={[280, -60, -300]} />
                            <WhiteOrb position={[70, 60, -260]} />
                            <LightWhiteOrb position={[190, 70, -240]} />
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