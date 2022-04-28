/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'


const Saturn = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/threeD/saturn.glb");


  const { position } = useSpring({
    to: {
      position: [25, -5, -12],
    }, 
    from: {
      position: [-35, -7, -9]

    },
    delay: 400,
    loop: true,
    config: {
      duration: 12000,
      // easing: 
    }
  })

  const { rotation } = useSpring({
    to: {
      rotation: [-Math.PI / 3, Math.PI / 2, 0]
    },
    from: {
      rotation: [Math.PI / 5, 0, 0]
    },
    delay: 400,
    loop: true,
    config: {
      duration: 12000
    }
  })


  return (
    <Float
      floatIntensity={0.1}
      rotationIntensity={0.12}
      speed={1}
    >
     <a.group rotation={rotation} position={position} scale={3} ref={group} {...props} dispose={null}>
      <group
        position={[0, -1e-7, 2e-8]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          geometry={nodes.Ring.geometry}
          material={materials.Ring}
          position={[0, 14.72110271, 9.18885326]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes._switchable.geometry}
          material={materials._switchable}
          position={[4.8e-7, 0.00000191, 0.00000977]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </a.group>
    </Float>
  );
}

useGLTF.preload("/threeD/saturn.glb");

export default Saturn

