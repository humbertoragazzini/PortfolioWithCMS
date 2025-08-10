// @ts-nocheck
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const bakedTexture = useTexture("/blender/Models/testing-1/map.jpg");
  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  const { nodes } = useGLTF("/blender/Models/testing-1/portfolio-5.glb");

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry}>
        {/* Unlit so your baked lights look exactly as in Blender */}
        <meshBasicMaterial map={bakedTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/blender/Models/testing-1/portfolio-5.glb");
