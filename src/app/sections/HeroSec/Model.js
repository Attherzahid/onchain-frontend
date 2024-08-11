import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

const Model = () => {
    const { nodes } = useGLTF("/3d-obj/onchain-updated.glb");
    const { viewport } = useThree()
    const torus = useRef(null);

    useFrame(() => {
        torus.current.rotation.z += 0.01
    })

    const materialProps = {
        thickness: 0.55,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.06,
        backside: true,
    }
    return (
        <group scale={viewport.width / 3.75} >
            <Text font={'/fonts/syncopateBold.ttf'} position={[0, 0.3, -1]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Onchain'.toUpperCase()}
            </Text>
            <Text font={'/fonts/syncopateBold.ttf'} position={[0, -0.3, -1]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Capital'.toUpperCase()}
            </Text>
            <mesh ref={torus} {...nodes.logo} position={[0, 0.005, 0]}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

export default Model