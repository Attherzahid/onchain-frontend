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
        if (windowWidth >= 991) {

            if (torus.current) {
                // Convert the mouse position to NDC
                const ndcX = (mousePosition.x / size.width) * 2 - 1.5;
                const ndcY = -(mousePosition.y / size.height) * 2 + 1.5;

                // Create a 3D vector from the NDC mouse position
                const vector = new THREE.Vector3(ndcX, ndcY, .5);
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
            torus.current.rotation.y += 0.02;

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

    const scaling = windowWidth <= 1440 ? 4 : 1.8;
    const { width, height } = viewport;
    const scalingFactor = Math.min(width, height) / scaling;

    return (
        <group scale={[scalingFactor, scalingFactor, scalingFactor]}>
            <Text font={'/fonts/syncopateBold.ttf'} position={windowWidth >= 1440 ? [0, 0.5, -1.1] : windowWidth >= 991 ? [0, 0.5, 0.3] : windowWidth >= 767 ? [0, 0.5, -0.6] : [0, 0.8, .2]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Onchain'.toUpperCase()}
            </Text>
            <Text font={'/fonts/syncopateBold.ttf'} position={windowWidth >= 1440 ? [0, -0.1, -1.1] : windowWidth >= 991 ? [0, -0.1, 0.3] : windowWidth >= 767 ? [0, -0.1, -0.6] : [0, 0.18, .2]} fontSize={.5} color="white" anchorX="center" anchorY="middle">
                {'Capital'.toUpperCase()}
            </Text>
            <mesh ref={torus} {...nodes.logo} position={windowWidth >= 1440 ? [0, 0.08, .05] : windowWidth >= 991 ? [0, 0.08, 1.4] : windowWidth >= 767 ? [0, 0.08, 1.2] : windowWidth >= 576 ? [0, 0.2, 2] : [0, 0.2, 2.4]} rotation={[Math.PI, 0, 0]}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

export default Model