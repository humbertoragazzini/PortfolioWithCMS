"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function CanvasWrapper({ children }: any) {
  return (
    <div className="w-full h-screen">
      <Canvas>
        {children}
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
}
