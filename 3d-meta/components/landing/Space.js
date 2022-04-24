import { useRef, useState, useEffect, Suspense, useCallback } from 'react'
import { SpaceSpinner, SpaceContainer } from './Space-Loader'
import { 
    Canvas,
    useFrame,
    useThree
} from '@react-three/fiber'
import Planet from './Planet'
import Astronaut from './Astronaut'
import Monolith from './Monolith'
import FlyingAsteroid from './FlyingAsteroid'
import { gsap } from 'gsap'
import { Stars, PerspectiveCamera, Loader, useGLTF, Environment, Float, SpotLight } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import { 
    Flex,
    Box as FlexBox,
} from '@react-three/flex'
import * as THREE from 'three'
import { loadGLTFModel } from '../../lib/model'

    
    const Space = (props) => {
        const refContainer = useRef()
        const [loading, setLoading ] = useState(true)
        const [renderer, setRenderer] = useState()
        const [_camera, setCamera] = useState()
        const [target] = useState(new THREE.Vector3(0, 1.2, 0))
        const [scene] = useState(new THREE.Scene())
        const [_controls, setControls] = useState()


        const handleWindowResize = useCallback(() => {
            const { current: container } = refContainer
            if (container && renderer) {
                const scW = container.clientWidth
                const scH = container.clientHeight
    
                renderer.setSize(scW, scH)
            }
        }, [renderer])


        useEffect(() => {
            const { current: container } = refContainer
            if (container && !renderer) {
                const scW = container.clientWidth
                const scH = container.clientHeight

                const renderer = new THREE.WebGLRenderer({
                    antialis: true, 
                    alpha: true
                })
                renderer.setPixelRatio(window.devicePixelRatio)
                renderer.setSize(scW, scH)
                renderer.outputEncoding = THREE.sRGBEncoding 
                container.appendChild(renderer.domElement)
                setRenderer(renderer)

                const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10)

                camera.position.z = 5
                camera.lookAt(refContainer)

                const ambientLight = new THREE.AmbientLight(0xcccccc, 0.65)
                scene.add(ambientLight)

                 loadGLTFModel(scene, '/threeD/red-rock.glb', {
                    receiveShadow: false,
                    castShadow: false
                }).then(() => {
                    // animate()
                    setLoading(false)
                })


        

            }
        }) 


        useEffect(() => {
            window.addEventListener('resize', handleWindowResize, false)
            return() => {
                window.removeEventListener('resize', handleWindowResize, false)
            }
        }, [renderer, handleWindowResize])


    return (
        <SpaceContainer ref={refContainer}>{loading && <SpaceSpinner />}</SpaceContainer>  
    )
    
}

export default Space

{/* <Canvas>
    <Suspense fallback={null}>
            <Stars />
            <ambientLight intensity={1} />
            <Flex justifyContent='center' flexDirection='row' alignItems='center' >
                <FlexBox  width='auto' height='auto' flexGrow={1} centerAnchor>
                    <Float
                        speed={5}
                        rotationIntensity={0.15}
                        floatIntensity={0.15}
                    >
                        <group position={[0.6, -0.1, 4.7]} scale={1} ref={astronautGroup} {...props} dispose={null} >
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
                        </group>
                    </Float>
                </FlexBox>
                <FlexBox width='auto' height='auto' centerAnchor>
                    <Planet />
                </FlexBox>
                <FlexBox width='auto' height='auto' centerAnchor>
                    <Monolith />
                    <FlyingAsteroid />
                </FlexBox>
            </Flex>
        <Dolly astronaut={astronautGroup} />
        <Environment preset='night' />
    </Suspense>
</Canvas>
<Loader /> */}
