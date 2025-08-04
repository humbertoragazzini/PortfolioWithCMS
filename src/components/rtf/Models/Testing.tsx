import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/blender/Models/testing-1/testing-bake.glb"
  );
  const bakedTexture = useTexture(
    "/blender/Models/testing-1/iluminated-floor.png"
  );

  // Disable color correction if needed
  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        position={[-4.2, 4.2, 0]}
      >
        <meshStandardMaterial map={bakedTexture} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        position={[-4.2, 6.3, 0]}
      >
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        position={[0, -2.1, 0]}
      >
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        position={[0, -6.3, 0]}
      >
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        position={[4.2, -6.3, 0]}
      >
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        position={[-4.2, -6.3, 0]}
      >
        <meshBasicMaterial color="white"></meshBasicMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/blender/Models/testing-1/testing-bake.glb");
