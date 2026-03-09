import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ======================================================
   3D Logo Plane — floats & rotates inside a Canvas
   ====================================================== */
function LogoPlane() {
    const meshRef = useRef();
    const texture = useLoader(THREE.TextureLoader, '/logo.png');

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle continuous rotation on Y
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            // Subtle tilt on X
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={0.4}
            floatIntensity={0.6}
            floatingRange={[-0.05, 0.05]}
        >
            <mesh ref={meshRef}>
                <planeGeometry args={[2.2, 1.8]} />
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    alphaTest={0.1}
                    side={THREE.DoubleSide}
                    emissive={new THREE.Color('#ff2800')}
                    emissiveIntensity={0.15}
                />
            </mesh>
        </Float>
    );
}

/* ======================================================
   Exported 3D Scene
   ====================================================== */
const Logo3D = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 3], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <pointLight
                    position={[2, 2, 3]}
                    intensity={1.5}
                    color="#ff2800"
                />
                <pointLight
                    position={[-2, -1, 2]}
                    intensity={0.5}
                    color="#ffffff"
                />
                <Suspense fallback={null}>
                    <LogoPlane />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Logo3D;
