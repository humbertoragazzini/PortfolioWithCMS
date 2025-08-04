"use client";

import {
  Html,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function CanvasWrapper({ children }: any) {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <mesh>
          <boxGeometry></boxGeometry>
          <meshBasicMaterial></meshBasicMaterial>
        </mesh>
        {children}
        {/* <OrbitControls></OrbitControls> */}
        {/* <PointerLockControls /> */}
        <TrackballControls />
      </Canvas>
    </div>
  );
}
