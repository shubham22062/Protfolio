"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

function LogoModel({ scale }: { scale: number }) {

    const { scene } = useGLTF("logo.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshStandardMaterial({
                    color: "#ef4444", // Tailwind red-500
                    metalness: 0.5,
                    roughness: 0.3,
                });
            }
        });
    }, [scene]);


    return (
        <primitive
            object={scene}
            scale={scale}
            position={[0, 0, 0]}
        />
    )
}

useGLTF.preload("logo.glb")


export default function Fixedlogo() {
    const [scale, setScale] = useState(1.5);

    useEffect(() => {
        const updateScale = () => {
            setScale(window.innerWidth < 640 ? 1.1 : 1.5);
        };

        updateScale();
        window.addEventListener("resize", updateScale);

        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div className="pt-10 w-full h-[160px] sm:h-[200px]">

            <Canvas camera={{ position: [0, 0, 5] }}>

                <ambientLight intensity={1.5} />

                <directionalLight
                    position={[3, 3, 3]}
                    intensity={2}
                />

                <LogoModel scale={scale} />

                <OrbitControls
                    enableZoom={false}
                />

            </Canvas>

        </div>
    )
}