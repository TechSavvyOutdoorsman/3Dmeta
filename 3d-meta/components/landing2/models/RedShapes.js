import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const RedShapes = ({ props, position, rotation }) => {
    const { nodes, materials } = useGLTF("/threeD/redShapes.glb");
    return (
      <group  {...props} rotation={rotation} position={position} dispose={null}>
        <group
          position={[-0.1, -0.1, 0.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        >
          <mesh
            geometry={nodes.Torus.geometry}
            material={materials["Cozy Cover"]}
            position={[-339.6, -718.5, 388.7]}
            rotation={[1.1, 0, 0]}
            scale={2.9}
          />
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials.Refresh}
            position={[230.2, 917.5, 166.6]}
            rotation={[1.1, 0, 0]}
            scale={2.9}
          />
          <mesh
            geometry={nodes.Sphere.geometry}
            material={materials.Arabella}
            position={[565.6, -172.7, 57.2]}
            scale={3.7}
          />
          <mesh
            geometry={nodes.Box_2.geometry}
            material={materials["Dallas 2"]}
            position={[-283.6, -209.9, 38.3]}
            scale={[2.9, 3, 2.9]}
          />
          <mesh
            geometry={nodes.Box_1.geometry}
            material={materials["Dallas 1"]}
            position={[521.7, 103.5, 80]}
            scale={[2.9, 3, 2.9]}
          />
          <mesh
            geometry={nodes.Box.geometry}
            material={materials.Dallas}
            position={[232, -309.2, 48.7]}
            scale={[2.9, 3, 2.9]}
          />
        </group>
      </group>
    )
}

useGLTF.preload(GLTFLoader, "/threeD/redShapes.glb")
export default RedShapes