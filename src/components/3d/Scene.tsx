import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export const Scene = () => {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingGeometry />
        <ParticleField />
      </Suspense>
    </Canvas>
  );
};