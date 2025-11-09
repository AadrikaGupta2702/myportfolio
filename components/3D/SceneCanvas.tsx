"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import AbstractShape from "./AbstractShape";

export default function SceneCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} />
        <AbstractShape position={[0, 1, -5]} color="#06b6d4" speed={0.15} />
        <AbstractShape position={[-3, -2, -4]} color="#8b5cf6" speed={0.25} />
        <AbstractShape position={[3, -1, -6]} color="#f472b6" speed={0.2} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
    </div>
  );
}
