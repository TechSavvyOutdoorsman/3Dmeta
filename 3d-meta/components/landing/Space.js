import { useRef, Suspense,  } from 'react'
import { Canvas, } from '@react-three/fiber'
import Planet from './Planet'
import Saturn from './Saturn'
import FlyingAsteroid from './FlyingAsteroid'
import { Stars, Loader, useGLTF, Environment, Float, } from '@react-three/drei'
import { useSpring, animated, easings } from '@react-spring/three'
import { Flex, Box as FlexBox, } from '@react-three/flex'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


    const Astronaut = () => {
        const mesh = useRef()
        const { nodes, materials } = useGLTF('/threeD/astronaut.glb')
        useGLTF.preload(GLTFLoader, '/threeD/astronaut.glb')

        const { position, rotation } = useSpring({
            to: {
                position: [0.6, 0.1, 4.8],
                rotation: [-0.2, 0, 0]
            }, 
            from: {
                position: [0.6, -6, 0]
            },
            delay: 300,
            config: {
                duration: 1500,
                easing: easings.easeOutQuint
            }
        })

        

        return (
                            <animated.group position={position} rotation={rotation} ref={mesh} dispose={null} >
                                    <group
                                        position={[-1.103, 0, -0.753]}
                                        rotation={[-Math.PI / 2, 0, 0]}
                                        scale={0.001}
                                    >
                                        <mesh
                                        geometry={nodes.Helmet.geometry}
                                        material={materials.Helmet}
                                        position={[0, -16.973, 255.446]}
                                        scale={0.71}
                                        />
                                        <mesh
                                        geometry={nodes._switchable.geometry}
                                        material={materials["_switchable 1"]}
                                        position={[0, 2.839, 0]}
                                        scale={0.71}
                                        />
                                        <mesh
                                        geometry={nodes.Addons_1.geometry}
                                        material={materials["Addons 1"]}
                                        position={[0, -49.21, 155.926]}
                                        scale={0.71}
                                        />
        
                                        <mesh
                                        geometry={nodes.Addons_2.geometry}
                                        material={materials["Addons 2"]}
                                        position={[0, -44.811, -41.869]}
                                        scale={0.71}
                                        />
                                        <mesh
                                        geometry={nodes.Addons_3.geometry}
                                        material={materials["Addons 3"]}
                                        position={[-8.842, 7.86, 155.926]}
                                        scale={0.71}
                                        />
                                        <mesh
                                        geometry={nodes.Addons_4.geometry}
                                        material={materials["Addons 4"]}
                                        position={[0, 4.579, -41.75]}
                                        />
                                        <mesh
                                        geometry={nodes.Visor.geometry}
                                        material={materials.Visor}
                                        position={[0, -43.498, 284.758]}
                                        rotation={[0.262, 0, 0]}
                                        scale={0.71}
                                        />
                                    </group>
                                </animated.group>

        )
    }

    const Space = () => {

        return (
            <>
        <Canvas>

            <Suspense fallback={null}>
                    <Stars />
                    <ambientLight intensity={1} color='#FFFFFF'  />
                    <Flex justifyContent='center' flexDirection='row' alignItems='center' >
                        <FlexBox  width='auto' height='auto' flexGrow={1} centerAnchor>
                            <Float
                                speed={5}
                                rotationIntensity={0.15}
                                floatIntensity={0.15}
                            >
                                {/* position={[0.6, -0.1, 4.7]} */}

                                <Astronaut />
                            </Float>
                        </FlexBox>
                        <FlexBox width='auto' height='auto' centerAnchor>
                            <Planet />
                        </FlexBox>
                        <FlexBox width='auto' height='auto' centerAnchor>
                            <Saturn />
                            <FlyingAsteroid />
                        </FlexBox>
                    </Flex>
                <Environment preset='night' />
            </Suspense>
        </Canvas>
        <Loader />
        </>
    )
    
}

export default Space

