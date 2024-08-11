'use client'
import React, { useRef } from 'react';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const HeroSec = () => {
    return (
        <section class="hero-sec">
            <Canvas >
                <Model />
                <directionalLight intensity={2} position={[0, 2, 3]} />
                <Environment preset="city" />
            </Canvas>
            <div class="container">
            </div>
            <div class="obj obj-1"></div>
            <div class="obj obj-2"></div>
            <div class="obj obj-3"></div>
        </section>
    )
}

export default HeroSec