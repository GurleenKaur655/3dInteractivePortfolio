import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from "../assets/3d/unicorn.glb"
import * as THREE from 'three'

const Unicorn = ({ currentAnimation, ...props }) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group)
   useEffect(() => {
      Object.values(actions).forEach((action) => action.stop());
  
      if (actions[currentAnimation]) {
        actions[currentAnimation].play();
      }
    }, [actions, currentAnimation]);

    useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.emissive = new THREE.Color(0x444444)  // adds glow
        material.emissiveIntensity = 0.4
        material.roughness = 0.3
        material.metalness = 0.1
        material.needsUpdate = true
      })
    }
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e743a2339c314417bf7a906b4cd8f0affbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BODY1" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="ROG" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="EYES" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="HAIRS" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_9">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Unicorn1}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.down}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Eyes}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Hairs1}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <group name="Object_11" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_14" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_16" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_18" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Unicorn;

