"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

function LogoModel(){

    const {scene} = useGLTF("logo.glb");

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


    return(
        <primitive
            object={scene}
            scale={1.5}
            position={[0,0,0]}
        />
    )
}

useGLTF.preload("logo.glb")


export default function Fixedlogo(){
    return(
        <div className="pt-10 w-full h-[200px]">

            <Canvas camera={{ position:[0,0,5] }}>

                <ambientLight intensity={1.5}/>

                <directionalLight 
                    position={[3,3,3]} 
                    intensity={2}
                />

                <LogoModel/>

                <OrbitControls 
                    enableZoom={false}
                />

            </Canvas>

        </div>
    )
}