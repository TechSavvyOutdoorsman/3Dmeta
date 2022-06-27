import { useRef, Suspense,  } from 'react'
import { Canvas, } from '@react-three/fiber'
import { useGLTF, Environment, Float  } from '@react-three/drei'
import { useSpring, animated, easings } from '@react-spring/three'
import { Flex, Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const WhiteOrb = (props) => {
    const group = useRef()
    const { nodes, materials} = useGLTF('/threeD/whiteOrb.glb')

    return (
        <group ref={group} position={[-110, -80, -200]} scale={0.45}  {...props} dispose={null}>
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials.Shelton}
                position={[-0.0662462, 0, 0.30364563]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}      
            />
        </group>
    )
}

const LightGrayOrb = (props) => {
    const group = useRef()
    const { nodes, materials} = useGLTF('/threeD/lightGrayOrb.glb')

    return (
        <group ref={group} position={[160, 140, -300]} scale={0.45}  {...props} dispose={null}>
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials.Shelton}
                position={[-0.0662462, 0, 0.30364563]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}      
            />
        </group>
    )
}

const DarkGrayOrb = (props) => {
    const group = useRef()
    const { nodes, materials} = useGLTF('/threeD/darkGrayOrb.glb')

    return (
        <group ref={group} position={[-300, -20, -600]} scale={0.45}  {...props} dispose={null}>
            <mesh
                geometry={nodes.Sphere.geometry}
                material={materials.Shelton}
                position={[-0.0662462, 0, 0.30364563]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}      
            />
        </group>
    )
}



const Laptop = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/laptop-meta.glb')
    
    const { position, rotation } = useSpring({
            to: {
                    position: [ 0, -50, -350 ],
                    rotation: [ -Math.PI / 0.53, 0, 0]
                }, 
                from: {
                        position: [ 0, -350, -400 ]
                    },
                    // delay: 300,
                    config: {
                            duration: 1500,
                            easing: easings.easeOutQuint
                        }
                    })
                    
                    
                    
return (
    <animated.group position={position} rotation={rotation} scale={1} ref={group} {...props} dispose={null}>
        <group
          position={[-0.3, 0, 0.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        >
          <mesh
            geometry={nodes.Body.geometry}
            material={nodes.Body.material}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Top.geometry}
            material={nodes.Top.material}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Connector.geometry}
            material={materials["Connector 1"]}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Black_Frame_2.geometry}
            material={nodes.Black_Frame_2.material}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Stands.geometry}
            material={nodes.Stands.material}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Connectors.geometry}
            material={materials.Connectors}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Touchpad.geometry}
            material={materials.Touchpad}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Speaker.geometry}
            material={materials.Speaker}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Screen.geometry}
            material={materials.Venus}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Black_Frame.geometry}
            material={materials["Display Rim 1"]}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Screws.geometry}
            material={materials["Bottom Screws"]}
            position={[0, 7.66, 0]}
          />
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={materials.Keyboard}
            position={[0, 7.66, 0]}
          />
        </group>
      </animated.group>

    )
}



const LaptopCanvas = () => {
    
    return (
        <>
            <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} color='#FFFFFF' />
                        <pointLight position={[-750, 100, 500]} />
                                <Flex>
                                    <FlexBox flexGrow={1} width='auto' height='auto' centerAnchor>
                                        <Float
                                            speed={5}
                                            rotationIntensity={0.15}
                                            floatIntensity={0.15}
                                        >
                                            <DarkGrayOrb />
                                            <LightGrayOrb />
                                            <WhiteOrb />
                                            <Laptop />
                                        </Float>
                                    </FlexBox>

                                </Flex>
                        <Environment preset='night' />
                    </Suspense>
            </Canvas>
        </>
    )
}


useGLTF.preload(GLTFLoader, '/threeD/laptop-meta.glb')
useGLTF.preload(GLTFLoader, "/threeD/darkGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/lightGrayOrb.glb")
useGLTF.preload(GLTFLoader, "/threeD/whiteOrb.glb")
export default LaptopCanvas