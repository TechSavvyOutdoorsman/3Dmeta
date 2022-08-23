import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Website = ({ props, position, rotation }) => {
    const { nodes, materials } = useGLTF("/threeD/website.glb")
    return (
      <group {...props} rotation={rotation} position={position} dispose={null}>
        <group
          position={[1.8, 0.3, 0.2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.65}
        >
          <group position={[0, 258.5, 446.4]}>
            <mesh
              geometry={nodes.Sphere_5.geometry}
              material={materials["Abstract 4"]}
              position={[-11.5, -230.9, 205]}
              rotation={[-0.1, 0, 0]}
              scale={2.6}
            />
            <mesh
              geometry={nodes.Sphere_4.geometry}
              material={materials["Abstract 3"]}
              position={[-51.6, 47.3, 330.6]}
              rotation={[-0.1, 0, 0]}
              scale={1.2}
            />
            <mesh
              geometry={nodes.Sphere_3.geometry}
              material={materials["Abstract 2"]}
              position={[-18.8, 245.5, 227.9]}
              rotation={[-0.1, 0, 0]}
              scale={1.8}
            />
            <mesh
              geometry={nodes.Sphere_1.geometry}
              material={materials.Abstract}
              position={[35, 2.1, 69.4]}
              rotation={[-0.1, 0, 0]}
              scale={2.1}
            />
            <mesh
              geometry={nodes.Sphere_2.geometry}
              material={materials["Abstract 1"]}
              position={[-11.5, 222, 0.5]}
              rotation={[-0.1, 0, 0]}
              scale={1.4}
            />
          </group>
          <group position={[-83.9, 14.8, 901.7]}>
            <group position={[-1.5, 424, 0]}>
              <mesh
                geometry={nodes["3D_Text_9_-_C"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 70.5, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_o"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 87.5, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_n"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 103.9, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_t"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 120.9, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_t_1"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 159.8, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_a"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 131.2, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_9_-_c"].geometry}
                material={materials["Wild Party 12"]}
                position={[-3, 146.6, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_8_-_A"].geometry}
                material={materials["Wild Party 8"]}
                position={[-3, -44.1, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_8_-_b"].geometry}
                material={materials["Wild Party 8"]}
                position={[-3, -26.5, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_8_-_o"].geometry}
                material={materials["Wild Party 8"]}
                position={[-3, -9.8, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_8_-_u"].geometry}
                material={materials["Wild Party 8"]}
                position={[-3, 6.5, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_8_-_t"].geometry}
                material={materials["Wild Party 8"]}
                position={[-3, 23.5, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_P"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -173.3, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_r"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -156.8, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_i"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -145.4, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_i_1"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -124.9, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_c"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -138.1, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_n"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -117.6, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
              <mesh
                geometry={nodes["3D_Text_7_-_g"].geometry}
                material={materials["Wild Party 7"]}
                position={[-3, -100.7, 8.1]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.6, 0.4, 0.6]}
              />
            </group>
            <mesh
              geometry={nodes["3D_Text_6_-_S"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -609.4, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_a"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -586.4, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_l"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -561.5, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_e"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -548.6, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_s"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -523.9, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_B"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -503.3, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_o"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -476.4, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
            <mesh
              geometry={nodes["3D_Text_6_-_t"].geometry}
              material={materials["Wild Party 6"]}
              position={[-4.5, -451, 7.1]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.9, 0.6, 0.9]}
            />
          </group>
          <group position={[-85.5, -387.8, 114]} scale={0.7}>
            <mesh
              geometry={nodes["3D_Text_5_-_F"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -234.9, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_i"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -199.3, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_n"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -178.8, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_n_1"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 199, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_d"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -135.4, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_Y"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -76.6, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_o"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, -34.6, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_u"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 6.5, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_r"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 49.9, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_P"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 97.1, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_l"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 138.3, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes["3D_Text_5_-_a"].geometry}
              material={materials["Wild Party 5"]}
              position={[9.6, 158.8, 35.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.5, 0.7, 1.4]}
            />
            <mesh
              geometry={nodes.Box_4.geometry}
              material={materials["Amelia 1"]}
              position={[-5.8, 0, 0]}
              scale={[3, 0.5, 3]}
            />
          </group>
          <group position={[-86.7, -221.8, 256.3]} scale={0.7}>
            <mesh
              geometry={nodes["3D_Text_4_-_u"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -501.7, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_u_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -321.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_s"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -469.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_i"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -444.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_i_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -178.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_i_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -145.8, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_i_3"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -106.6, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_i_4"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 92.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_n"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -430.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_n_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -17.4, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_n_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 167.7, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_g"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -397.9, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_g_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 106.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_o"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -352.6, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_o_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 296.5, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_r"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -288.8, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_r_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -219.8, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_r_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 437.1, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_A"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -253.5, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_t"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -197.9, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_t_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 15.1, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_t_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 346.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_f"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -164.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_f_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 327.9, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_c"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -131.8, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_c_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 200.1, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_a"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -92.6, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_a_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 407.5, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_l"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -63, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_l_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 64.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_l_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 78.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_I"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, -35.6, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_e"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 34.8, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_e_1"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 138.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_e_2"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 225.3, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_e_3"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 459, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_S"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 268.2, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_w"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 366, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_4_-_"].geometry}
              material={materials["Wild Party 4"]}
              position={[-4.2, 488.4, 13.7]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_w"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -501.7, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_i"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -460.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_t"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -446.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_t_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -254.3, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_t_2"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -113.4, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_t_3"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 57.3, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_t_4"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 333.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_h"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -426.4, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_y"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -380.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_y_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 281, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_o"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -353.4, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_o_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -93.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_u"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -322.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_r"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -289.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_r_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -23.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_e"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -234.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_e_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -1.8, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_e_2"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 77, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_e_3"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 188.3, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_e_4"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 352.8, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_a"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -205.2, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_a_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 27.7, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_a_2"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 144.8, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_m"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -175.6, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_m_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 382.3, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_c"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, -48.9, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_s"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 119.8, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_s_1"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 217.8, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_s_2"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 256.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_s_3"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 308.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_s_4"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 431.1, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_3_-_l"].geometry}
              material={materials["Wild Party 3"]}
              position={[-4.2, 174.3, 73.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_O"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -503.6, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_u"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -463.2, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_r"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -430.7, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_r_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -137.8, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_r_2"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 15.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_S"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -395.5, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_a"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -367.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_a_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 111.6, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_a_2"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 311.2, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_l"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -337.6, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_e"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -323.6, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_e_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -167.2, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_s"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -294.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_s_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -96.2, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_E"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -255.8, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_x"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -227.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_p"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -199.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_t"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -115.9, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_w"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -57.8, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_o"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, -16.3, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_k"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 37, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_h"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 79.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_h_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 278.7, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_n"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 141.1, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_n_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 232.9, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_n_2"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 340.7, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_d"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 173.6, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_d_1"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 373.2, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
            <mesh
              geometry={nodes["3D_Text_2_-_i"].geometry}
              material={materials["Wild Party 2"]}
              position={[-4.2, 218.9, 132.3]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.1, 0.6, 1.1]}
            />
          </group>
          <group position={[-79.4, -161, 406.3]} scale={0.7}>
            <mesh
              geometry={nodes["3D_Text_1_-_f"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -590.8, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_o"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -542.8, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_o_1"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -6.6, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_r"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -468.8, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_S"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -384.1, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_a"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -317.1, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_a_1"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -244.7, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_a_2"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 258.3, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_s"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -172.3, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_s_1"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 518.1, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_C"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, -82, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_m"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 67.4, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_p"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 183.6, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_n"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 330.7, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_i"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 408.5, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_1_-_e"].geometry}
              material={materials["Wild Party 1"]}
              position={[-14, 446.3, 30.9]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_S"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -589.7, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_S_1"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -251, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_a"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -522.8, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_l"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -450.4, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_l_1"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -110.1, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_e"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -412.9, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_s"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -341.2, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_s_1"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, 248.1, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_o"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -184, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_o_1"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, 96.3, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_u"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, -72.6, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_t"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, 5.2, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_i"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, 58.6, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
            <mesh
              geometry={nodes["3D_Text_-_n"].geometry}
              material={materials["Wild Party"]}
              position={[-12.1, 170.3, 155.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[2.6, 1.7, 2.6]}
            />
          </group>
          <mesh
            geometry={nodes.Box_3.geometry}
            material={materials["Glass 1"]}
            position={[-975.6, 129.7, -443.4]}
          />
        </group>
      </group>
    )
}


useGLTF.preload(GLTFLoader, "/threeD/website.glb")
export default Website