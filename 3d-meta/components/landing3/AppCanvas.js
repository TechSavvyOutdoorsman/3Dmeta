import { useRef, Suspense,  } from 'react'
import { Canvas, } from '@react-three/fiber'
import { Loader, useGLTF, Environment, Float,  } from '@react-three/drei'
// import { useSpring, animated, easings } from '@react-spring/three'
import { Flex, Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Mobile = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/threeD/mobile.glb");

    return (
      <group   position={[-1, 0.4, 4.9]} rotation={[ -Math.PI / 0.0558, 0, 0]} ref={group} {...props} dispose={null}>
        <group
        position={[0.50331493, 0, -0.10058819]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      >
        <mesh
          geometry={nodes.Lens_1.geometry}
          material={materials["Lens 1"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Lens_2.geometry}
          material={materials["Lens 2"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Lens_3.geometry}
          material={materials["Lens 3"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Flash.geometry}
          material={materials.Flash}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Display_Rim.geometry}
          material={materials["Display Rim"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Connector.geometry}
          material={materials.Connector}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Camera_Rims_1.geometry}
          material={materials["Camera Rims 1"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Camera_Rims_2.geometry}
          material={materials["Camera Rims 2"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Sensors.geometry}
          material={materials.Sensors}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Rear_Glass.geometry}
          material={materials["Rear Glass"]}
          position={[-0.00739932, 22.29081511, 70.64221217]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Camera_Glass.geometry}
          material={materials["Camera Glass"]}
          position={[17.02101111, 22.16910481, 122.10163933]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Screws.geometry}
          material={materials.Screws}
          position={[0.00000566, -17.89788485, 1.438615]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body.geometry}
          material={materials.Body}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Antennas.geometry}
          material={materials.Antennas}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Screen.geometry}
          material={materials["May Mist"]}
          position={[-0.0799942, 0.5181253, -0.02041]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
    </group>
    );
  }
  
  useGLTF.preload(GLTFLoader, "/threeD/mobile.glb");
  
  const AppCanvas = () => {
      return (
          <>
            <Canvas>
                <Suspense fallback={null}>
                        {/* <Stars /> */}
                        <ambientLight intensity={1} color='#FFFFFF'  />
                            <Flex>
                                <FlexBox flexGrow={1} width='auto' height='auto' centerAnchor>
                                    <Float
                                        speed={5}
                                        rotationIntensity={0.02}
                                        floatIntensity={0.02}
                                    >
                                        <Mobile />
                                    </Float>
                                </FlexBox>
                            </Flex>
                    <Environment preset='night' />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}

export default AppCanvas