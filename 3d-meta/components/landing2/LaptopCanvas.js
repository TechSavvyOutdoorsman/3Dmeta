import { useRef, Suspense,  } from 'react'
import { Canvas, } from '@react-three/fiber'
import { Stars, Loader, useGLTF, Environment, Float, OrbitControls,  } from '@react-three/drei'
import { useSpring, animated, easings } from '@react-spring/three'
import { Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



const Laptop = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/laptop-meta.glb')
    
    // const { position, rotation } = useSpring({
        //     to: {
            //         position: [0.6, 0.1, 4.8],
            //         rotation: [-0.2, 0, 0]
            //     }, 
            //     from: {
                //         position: [0.6, -6, 0]
                //     },
                //     delay: 300,
                //     config: {
                    //         duration: 1500,
                    //         easing: easings.easeOutQuint
                    //     }
                    // })
                    
                    
                    
return (
    <group position={[ 0, 0, 0]} ref={group} {...props} dispose={null}>
        <group
          position={[-0.3, 0, 0.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0}
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
      </group>

    )
}
useGLTF.preload(GLTFLoader, '/threeD/laptop-meta.glb')



const LaptopCanvas = () => {
    
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                        {/* <Stars /> */}
                        <ambientLight intensity={1} color='#FFFFFF'  />
                            <FlexBox width='auto' height='auto' flexGrow={1} centerAnchor>
                                <Float
                                    speed={5}
                                    rotationIntensity={0.15}
                                    floatIntensity={0.15}
                                >
                                    <Laptop />
                                </Float>
                            </FlexBox>
                    {/* <OrbitControls /> */}
                    <Environment preset='night' />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}

export default LaptopCanvas