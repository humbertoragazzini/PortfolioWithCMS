"use client";

import {
  FirstPersonControls,
  FlyControls,
  Html,
  MapControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../Models/Testing";

export default function CanvasWrapper({ children }: any) {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight></ambientLight>
        <Model></Model>
        {children}
        <OrbitControls></OrbitControls>
        {/* <PointerLockControls /> */}
        {/* <TrackballControls /> */}
        {/* <MapControls></MapControls> */}
        {/* <FirstPersonControls></FirstPersonControls> */}
        {/* <FlyControls movementSpeed={1} rollSpeed={0.5} dragToLook /> */}
      </Canvas>
    </div>
  );
}
