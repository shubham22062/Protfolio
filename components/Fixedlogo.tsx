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

function getScaleForWidth(width: number) {
    if (width < 400) return 0.85;
    if (width < 640) return 1.0;
    if (width < 768) return 1.15;
    if (width < 1024) return 1.25;
    if (width < 1280) return 1.35;
    if (width < 1536) return 1.5;
    return 1.65;
}

export default function Fixedlogo() {
    const [scale, setScale] = useState(1.5);

    useEffect(() => {
        const updateScale = () => {
            setScale(getScaleForWidth(window.innerWidth));
        };

        updateScale();
        window.addEventListener("resize", updateScale);

        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div className="pt-10 w-full h-[130px] xs:h-[150px] sm:h-[180px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px]">

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