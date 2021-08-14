import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import AsciiEffect from 'three/examples/jsm/effects/AsciiEffect';
import { Effects, OrbitControls } from '@react-three/drei';

const MyBox = ({ url }) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, url);

  useEffect(() => {
    console.log(gltf);
  }, [gltf]);

  return gltf ? <primitive object={gltf.scene} /> : null;
};

const BoxesPage = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 0, 12]} />

        <OrbitControls />
        <Suspense fallback={null}>
          <mesh>
            <MyBox url="/aldo-v7.glb" />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BoxesPage;
