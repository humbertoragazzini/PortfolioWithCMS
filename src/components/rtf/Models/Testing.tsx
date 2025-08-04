import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes } = useGLTF("/blender/Models/testing-1/testubg-bake.glb");
  const bakedTexture = useTexture("/blender/Models/testing-1/floor.png");

  // Disable color correction if needed
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry}>
        <meshBasicMaterial map={bakedTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}
