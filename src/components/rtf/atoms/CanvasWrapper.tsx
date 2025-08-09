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
        <perspectiveCamera
          makeDefault={true}
          rotation={[Math.PI / 2, 0, 0]}
          fov={75}
          near={0.1}
          far={1000}
        ></perspectiveCamera>
        <Model></Model>
        <MapControls
          enableRotate={false}
          enablePan={true}
          screenSpacePanning={true}
          minDistance={5}
          maxDistance={10}
        ></MapControls>
        {children}
        {/* <OrbitControls></OrbitControls> */}
        {/* <PointerLockControls /> */}
        {/* <TrackballControls /> */}
        {/* <FirstPersonControls></FirstPersonControls> */}
        {/* <FlyControls movementSpeed={1} rollSpeed={0.5} dragToLook /> */}
      </Canvas>
    </div>
  );
}
