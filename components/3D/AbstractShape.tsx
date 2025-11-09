"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AbstractShape({ color, position, speed }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * speed;
    mesh.current.rotation.y = t * speed * 1.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial
        color={color}
        metalness={0.6}
        roughness={0.3}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}
