import React, { useEffect, useRef, useState } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three';

const Model = () => {
    const { nodes } = useGLTF("/3d-obj/onchain-updated.glb");
    const { viewport, mouse, size, camera } = useThree()
    const torus = useRef(null);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame(() => {
        if (windowWidth >= 992) {

            if (torus.current) {
                // Convert the mouse position to NDC
                const ndcX = (mousePosition.x / size.width) * 2 - 1;
                const ndcY = -(mousePosition.y / size.height) * 2 + 1;

                // Create a 3D vector from the NDC mouse position
                const vector = new THREE.Vector3(ndcX, ndcY, 0.5);
                vector.unproject(camera);

                // Calculate the direction from the object to the mouse
                const dir = vector.sub(camera.position).normalize();

                dir.y = -dir.y;

                const sensitivity = 3; // Increase this value for more intensity
                dir.multiplyScalar(sensitivity);

                // Set the object's rotation to face the direction of the mouse
                const targetPosition = new THREE.Vector3();
                targetPosition.copy(camera.position).add(dir);

                // Invert the direction to correct the motion
                torus.current.lookAt(camera.position.clone().sub(dir));

                // Maintain the flipped orientation
                torus.current.rotation.x -= Math.PI; // Ensure the object remains flipped
            }
        } else {
            torus.current.rotation.y += 0.01;

            // Flip the object for smaller screens
            torus.current.rotation.x = 3.2; 

        }
    });

    const materialProps = {
        thickness: 0.55,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.06,
        backside: true,
    }

    return (
        <group scale={viewport.width / 2.4} >
            <Text font={'/fonts/syncopateBold.ttf'} position={windowWidth >= 577 ? [0, 0.3, -1] : [0, 0.8, -1]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Onchain'.toUpperCase()}
            </Text>
            <Text font={'/fonts/syncopateBold.ttf'} position={windowWidth >= 577 ? [0, -0.3, -1] : [0, 0.2, -1]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Capital'.toUpperCase()}
            </Text>
            <mesh ref={torus} {...nodes.logo} position={windowWidth >= 577 ? [0, 0.005, .2] : [0, 0.2, .7] } rotation={[Math.PI, 0, 0]}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

export default Model