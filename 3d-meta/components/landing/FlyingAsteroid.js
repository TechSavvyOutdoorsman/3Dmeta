/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'


export default function FlyingAsteroid({ ...props }) {
  const group = useRef()
  const group2= useRef()
  const group3 = useRef()
  const { nodes, materials } = useGLTF('/threeD/flying-asteroid.glb')

  const { position } = useSpring({
    to: {
      position: [6, -5, 3]
    }, 
    from: {
      position: [-12, 8, -1]
    },
    delay: 1200,
    loop: true,
    config: {
      duration: 3000,
      config: config.stiff
    }
  })


  return (
    <animated.group position={position}>
      <group scale={4} rotation={[ 2, 1, 0]}  ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Comet.geometry} material={materials.Stone} position={[0, 0.03, -0.03]} scale={0.01} />
        <mesh geometry={nodes.Tail_radiation.geometry} material={materials['Tail Radiation']} position={[0, 0.02, -0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
        <mesh geometry={nodes.Tail.geometry} material={materials.Stone} position={[-0.01, 0.01, -0.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      </group>
      <group scale={4} rotation={[ 2, 1, 0]} position={[-0.5, 0.8, -1]} ref={group2} {...props} dispose={null}>
        <mesh geometry={nodes.Comet.geometry} material={materials.Stone} position={[0, 0.03, -0.03]} scale={0.01} />
        <mesh geometry={nodes.Tail_radiation.geometry} material={materials['Tail Radiation']} position={[0, 0.02, -0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
        <mesh geometry={nodes.Tail.geometry} material={materials.Stone} position={[-0.01, 0.01, -0.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      </group>
      <group scale={4} rotation={[ 2, 1, 0]} position={[-0.5, -0.4, 0.5]} ref={group3} {...props} dispose={null}>
        <mesh geometry={nodes.Comet.geometry} material={materials.Stone} position={[0, 0.03, -0.03]} scale={0.01} />
        <mesh geometry={nodes.Tail_radiation.geometry} material={materials['Tail Radiation']} position={[0, 0.02, -0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
        <mesh geometry={nodes.Tail.geometry} material={materials.Stone} position={[-0.01, 0.01, -0.08]} rotation={[-Math.PI / 2, 0, 0]} scale={0.02} />
      </group>
    </animated.group>
  )
}

// useGLTF.preload('/threeD/flying-asteroid.glb')
