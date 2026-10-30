"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function Monolith() {
  const mesh = useRef<Mesh>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useFrame(({ pointer }) => {
    if (!mesh.current || reducedMotion) return;
    mesh.current.rotation.y += (pointer.x * 0.15 - mesh.current.rotation.y) * 0.04;
    mesh.current.rotation.x += (-pointer.y * 0.1 - mesh.current.rotation.x) * 0.04;
  });

  return (
    <mesh ref={mesh} rotation={[0.08, -0.24, 0]}>
      <boxGeometry args={[1.7, 3.2, 0.8]} />
      <meshStandardMaterial color="#9b9a91" metalness={0.88} roughness={0.24} />
    </mesh>
  );
}

export default function MonolithScene() {
  return (
    <Canvas
      aria-label="Interactive metallic monolith"
      camera={{ position: [0, 0, 5.2], fov: 34 }}
      dpr={[1, 1.5]}
      fallback={<div className="scene-fallback"><div className="monolith" aria-hidden="true" /><span className="mono">3D preview unavailable</span></div>}
      frameloop="always"
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={3} />
      <directionalLight position={[-3, -2, 1]} intensity={1} color="#d9e6ff" />
      <Monolith />
    </Canvas>
  );
}
