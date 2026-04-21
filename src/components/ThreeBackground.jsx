import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function Orb({ position, scale = 1, color = "#f6c76d", geometry = "sphere" }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.22;
  });

  const Geometry =
    geometry === "icosahedron" ? "icosahedronGeometry" : "sphereGeometry";

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        {Geometry === "icosahedronGeometry" ? (
          <icosahedronGeometry args={[1, 1]} />
        ) : (
          <sphereGeometry args={[1, 32, 32]} />
        )}
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.18}
          emissive={color}
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot() {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.16;
  });

  return (
    <Float speed={1.2} rotationIntensity={1.4} floatIntensity={1.5}>
      <mesh ref={ref} position={[2.4, -1.4, -1.5]}>
        <torusKnotGeometry args={[0.72, 0.22, 120, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.08}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,199,109,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,_#050816_0%,_#070b18_55%,_#050816_100%)]" />
      <Canvas camera={{ position: [0, 0, 7], fov: 48 }}>
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 6, 18]} />

        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 4, 5]} intensity={1.2} />
        <pointLight position={[-4, -2, -3]} intensity={2.2} color="#f6c76d" />
        <pointLight position={[2, 2, 2]} intensity={1.2} color="#60a5fa" />

        <Stars radius={70} depth={35} count={1600} factor={4} fade speed={1} />

        <Orb position={[-2.8, 1.8, -2]} scale={0.9} color="#60a5fa" geometry="icosahedron" />
        <Orb position={[-1.2, -0.5, -1]} scale={1.5} color="#f6c76d" geometry="sphere" />
        <Orb position={[1.8, 1.4, -2.2]} scale={0.7} color="#8b5cf6" geometry="icosahedron" />
        <TorusKnot />
      </Canvas>
    </div>
  );
}