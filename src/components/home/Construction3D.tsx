
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// Building component that represents a partially constructed building
const ConstructionSite = ({ onHover }: { onHover: (part: string | null) => void }) => {
  const group = useRef<THREE.Group>(null);
  
  // Rotation animation
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -1.5, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Foundation/Base */}
      <mesh 
        position={[0, -0.1, 0]}
        onPointerOver={() => onHover('foundation')}
        onPointerOut={() => onHover(null)}
      >
        <boxGeometry args={[5, 0.2, 5]} />
        <meshStandardMaterial color="#F4F5F7" />
      </mesh>

      {/* First floor structure (partially built) */}
      <mesh 
        position={[0, 0.5, 0]}
        onPointerOver={() => onHover('structure')}
        onPointerOut={() => onHover(null)}
      >
        <boxGeometry args={[4.5, 1, 4.5]} />
        <meshStandardMaterial color="#F4F5F7" />
      </mesh>

      {/* Columns on the second floor (under construction) */}
      {[-1.8, 1.8].map((x) =>
        [-1.8, 1.8].map((z) => (
          <mesh 
            key={`column-${x}-${z}`} 
            position={[x, 1.5, z]}
            onPointerOver={() => onHover('columns')}
            onPointerOut={() => onHover(null)}
          >
            <boxGeometry args={[0.3, 1, 0.3]} />
            <meshStandardMaterial color="#2E3A50" />
          </mesh>
        ))
      )}

      {/* Steel beams connecting columns */}
      {[
        [-1.8, 1.8, 0, 0], // x1, x2, z1, z2
        [0, 0, -1.8, 1.8],
      ].map((coords, i) => (
        <mesh 
          key={`beam-${i}`} 
          position={[(coords[0] + coords[1]) / 2, 2, (coords[2] + coords[3]) / 2]}
          rotation={[0, i === 0 ? 0 : Math.PI / 2, 0]}
          onPointerOver={() => onHover('beams')}
          onPointerOut={() => onHover(null)}
        >
          <boxGeometry args={[Math.abs(coords[1] - coords[0]) + 0.3, 0.1, 0.1]} />
          <meshStandardMaterial color="#5BDE5E" />
        </mesh>
      ))}

      {/* Scaffolding on one side */}
      <group 
        position={[2.5, 1, 0]}
        onPointerOver={() => onHover('scaffolding')}
        onPointerOut={() => onHover(null)}
      >
        {/* Vertical poles */}
        {[-1.5, 0, 1.5].map((z, i) => (
          <mesh key={`scaffold-v-${i}`} position={[0, 0, z]}>
            <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
            <meshStandardMaterial color="#5BDE5E" />
          </mesh>
        ))}
        {/* Horizontal connectors */}
        {[0, 1.5].map((y, i) => (
          <mesh key={`scaffold-h-${i}`} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
            <meshStandardMaterial color="#5BDE5E" />
          </mesh>
        ))}
        {/* Scaffold platforms */}
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.5, 0.05, 3]} />
          <meshStandardMaterial color="#F4F5F7" />
        </mesh>
      </group>

      {/* Mini crane on top */}
      <group 
        position={[0, 2.5, 0]}
        onPointerOver={() => onHover('crane')}
        onPointerOut={() => onHover(null)}
      >
        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#F8B500" />
        </mesh>
        {/* Tower */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#F8B500" />
        </mesh>
        {/* Arm */}
        <mesh position={[1, 1.1, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2, 0.1, 0.1]} />
          <meshStandardMaterial color="#F8B500" />
        </mesh>
        {/* Counterweight */}
        <mesh position={[-0.5, 1.1, 0]}>
          <boxGeometry args={[0.8, 0.2, 0.2]} />
          <meshStandardMaterial color="#2E3A50" />
        </mesh>
        {/* Cable */}
        <mesh position={[1.8, 0.8, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
          <meshStandardMaterial color="#2E3A50" />
        </mesh>
        {/* Hook */}
        <mesh position={[1.8, 0.4, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#2E3A50" />
        </mesh>
      </group>

      {/* Construction materials on ground */}
      <group position={[-2, 0, 1.5]}>
        {/* Stack of materials */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1, 0.3, 0.6]} />
          <meshStandardMaterial color="#2E3A50" />
        </mesh>
      </group>
    </group>
  );
};

const Construction3D: React.FC = () => {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const handleHover = (part: string | null) => {
    setHoveredPart(part);
    // Change cursor style
    document.body.style.cursor = part ? 'pointer' : 'auto';
  };

  return (
    <div className="w-full h-96 md:h-[500px] lg:h-[600px] 2xl:h-[700px] relative">
      {/* Information overlay */}
      {hoveredPart && (
        <div className="absolute top-4 left-4 z-10 bg-black/70 text-white p-3 rounded shadow-lg animate-fade-in">
          <p className="text-sm font-semibold capitalize">{hoveredPart}</p>
          <p className="text-xs">
            {hoveredPart === 'foundation' && 'Reinforced concrete foundation'}
            {hoveredPart === 'structure' && 'First floor structure with steel reinforcement'}
            {hoveredPart === 'columns' && 'Steel-reinforced concrete pillars'}
            {hoveredPart === 'beams' && 'High-tension support beams'}
            {hoveredPart === 'scaffolding' && 'Temporary structure for workers'}
            {hoveredPart === 'crane' && 'Tower crane for lifting materials'}
          </p>
        </div>
      )}

      <Canvas
        shadows
        dpr={[1, 2]}
        className="bg-transparent"
      >
        <PerspectiveCamera makeDefault position={[6, 5, 8]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <hemisphereLight intensity={0.3} groundColor="#2E3A50" />
        <fog attach="fog" args={['#F4F5F7', 15, 25]} />
        <ConstructionSite onHover={handleHover} />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
      
      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs p-2 rounded">
        Drag to rotate | Scroll to zoom
      </div>
    </div>
  );
};

export default Construction3D;
