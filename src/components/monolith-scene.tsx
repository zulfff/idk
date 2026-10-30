"use client";

import { RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function Monolith() {
  const group = useRef<Group>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useFrame(({ pointer, clock }) => {
    if (!group.current || reducedMotion) return;
    const idle = clock.elapsedTime * 0.12;
    group.current.rotation.y += (idle + pointer.x * 0.16 - group.current.rotation.y) * 0.035;
    group.current.rotation.x += (pointer.y * -0.12 - group.current.rotation.x) * 0.035;
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.035;
  });

  return (
    <group ref={group} rotation={[0.04, -0.2, 0]}>
      <RoundedBox args={[2.2, 4.1, 1.05]} radius={0.15} smoothness={5} castShadow receiveShadow>
        <meshStandardMaterial color="#aaa99f" metalness={0.94} roughness={0.2} />
      </RoundedBox>
      <mesh position={[0, 0.45, 0.56]} scale={[0.7, 0.025, 0.025]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#b7ff4a" emissive="#6c9d17" emissiveIntensity={0.7} />
      </mesh>
      <mesh position={[0, -0.65, 0.44]} scale={[0.34, 0.02, 0.02]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#b7ff4a" emissive="#6c9d17" emissiveIntensity={0.7} />
      </mesh>
      <mesh position={[0, 0, -0.44]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[1.15, 2.35]} />
        <meshStandardMaterial color="#444640" metalness={0.82} roughness={0.28} />
      </mesh>
    </group>
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
      shadows
    >
      <color attach="background" args={["#20211f"]} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={4} castShadow />
      <directionalLight position={[-3, -2, 1]} intensity={1.4} color="#d9e6ff" />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#b7ff4a" />
      <Monolith />
    </Canvas>
  );
}
