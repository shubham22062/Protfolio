"use client"

import { Canvas } from "@react-three/fiber"

import { OrbitControls, useGLTF } from "@react-three/drei";

function LogoModel(){
    const {scene} = useGLTF("logo.glb");

    return(
        <primitive
        object={scene}
        scale = {1.5}
        position ={[0,0,0]}
        
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