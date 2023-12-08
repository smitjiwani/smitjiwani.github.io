import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Box } from '@react-three/drei';
import '../styles/Three.css'
import { WireframeMaterialShaders } from '@react-three/drei/materials/WireframeMaterial';
import { render } from 'react-dom';


const RotatingCubes = () => {
    const group = useRef();

    useFrame(() => {
        group.current.rotation.x += 0.01;
        group.current.rotation.y += 0.01;
    });

    const boxColor = '#90512f';

    return (
        <group ref={group}>
            {[...Array(75)].map((_, index) => (
                <mesh key={index} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]} rotation={[Math.random(), Math.random(), Math.random()]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial attach="material" color={boxColor} wireframe />
                </mesh>
            ))}
        </group>
    );
};

const Three = () => {
    return (
        <div className="three">
            <Canvas className='canvas'>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <RotatingCubes />
            </Canvas>
        </div>
    );
};

export default Three;

render(<Three />, document.getElementById('root'));

