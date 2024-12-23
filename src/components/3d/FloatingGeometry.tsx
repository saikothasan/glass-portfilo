import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingGeometry = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <Icosahedron
      ref={mesh}
      args={[1, 4]}
      scale={2}
    >
      <MeshDistortMaterial
        color="#00FFB2"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </Icosahedron>
  );
};