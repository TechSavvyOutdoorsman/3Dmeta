import { useRef } from 'react'
import { useGLTF, Float } from "@react-three/drei"

const Planet = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/threeD/red-rock.glb')


    return (
            <Float
                floatIntensity={0.1}
                rotationIntensity={0.1}
                speed={1}
            >

                    <group scale={35} position={[ -30, 60, -90]} ref={group} {...props} dispose={null}>
                            <mesh
                            geometry={nodes.Planet.geometry}
                            material={materials.Rock}
                            position={[-0.16243443, 0.09250347, -0.3609491]}
                            scale={[0.01685666, 0.01685666, 0.01685666]}
                            />
                            <mesh
                            geometry={nodes.Craters.geometry}
                            material={materials.Craters}
                            position={[-0.1621473, 0.09455113, -0.34635777]}
                            scale={[0.01685666, 0.01685666, 0.01685666]}
                            />
                    </group>
        
            </Float>


    )
}

// useGLTF.preload('/threeD/red-rock.glb')

export default Planet