"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mesh2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.3;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = -t * 0.15;
      mesh2Ref.current.rotation.z = Math.cos(t * 0.2) * 0.2;
    }
  });

  return (
    <group>
      {/* Main icosahedron */}
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial
            color="#5c7a5f"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      {/* Inner solid */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={mesh2Ref} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color="#c9b99a"
            transparent
            opacity={0.15}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      </Float>

      {/* Orbiting small spheres */}
      <OrbitingParticles />
    </group>
  );
}

function OrbitingParticles() {
  const group = useRef<THREE.Group>(null!);
  const count = 6;

  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2;
      return [Math.cos(angle) * radius, (Math.random() - 0.5) * 1.2, Math.sin(angle) * radius] as [number, number, number];
    });
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04 + (i % 3) * 0.02, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#5c7a5f" : "#c9b99a"}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f4f1eb" />
        <pointLight position={[-3, -3, -3]} intensity={0.4} color="#5c7a5f" />
        <FloatingMesh />
      </Canvas>
    </div>
  );
}
