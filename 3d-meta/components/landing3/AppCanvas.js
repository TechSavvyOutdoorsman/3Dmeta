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
      <group position={[0, -75, -170]} rotation={[ -Math.PI / 0.0558, 0, 0]} ref={group} {...props} dispose={null}>
        <group
          position={[0.5, 0, -0.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        >
          <mesh
            geometry={nodes.Lens_1.geometry}
            material={materials["Lens 1"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Lens_2.geometry}
            material={materials["Lens 2"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Lens_3.geometry}
            material={materials["Lens 3"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Flash.geometry}
            material={materials.Flash}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Display_Rim.geometry}
            material={materials["Display Rim"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Connector.geometry}
            material={materials.Connector}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Camera_Rims_1.geometry}
            material={materials["Camera Rims 1"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Camera_Rims_2.geometry}
            material={materials["Camera Rims 2"]}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Sensors.geometry}
            material={materials.Sensors}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Rear_Glass.geometry}
            material={materials["Rear Glass"]}
            position={[-0.01, 22.29, 70.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Camera_Glass.geometry}
            material={materials["Camera Glass"]}
            position={[17.02, 22.17, 122.1]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Screws.geometry}
            material={materials.Screws}
            position={[0, -17.9, 1.44]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body.geometry}
            material={materials.Body}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Antennas.geometry}
            material={materials.Antennas}
            position={[-0.08, 0.52, -0.02]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Screen.geometry}
            material={materials["May Mist"]}
            position={[-0.08, 0.52, -0.02]}
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
                                        rotationIntensity={0.15}
                                        floatIntensity={0.15}
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