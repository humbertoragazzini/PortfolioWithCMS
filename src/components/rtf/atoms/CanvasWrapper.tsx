"use client";

import {
  FirstPersonControls,
  Html,
  MapControls,
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
        {/* <TrackballControls /> */}
        {/* <MapControls></MapControls> */}
        {/* <FirstPersonControls></FirstPersonControls> */}
        <FlyControls movementSpeed={1} rollSpeed={0.5} dragToLook />
      </Canvas>
    </div>
  );
}
