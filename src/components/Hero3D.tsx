import React from 'react';
import { Scene } from './3d/Scene';
import { MouseTracker } from './3d/MouseTracker';

export const Hero3D = () => {
  return (
    <>
      <MouseTracker />
      <Scene />
    </>
  );
};