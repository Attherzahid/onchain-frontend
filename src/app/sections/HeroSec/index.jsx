'use client'
import React, { useRef } from 'react';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import Image from 'next/image';

const HeroSec = () => {
    return (
        <section className="hero-sec">
            <div className="container">
                <div className="object-wrapper position-relative">
                    <Canvas >
                        <Model />
                        <directionalLight intensity={2} position={[0, 2, 3]} />
                        <Environment preset="city" />
                    </Canvas>
                    <div className="content-wrapper">
                        <h1 className="main-title font-gilroy-medium">Let’s Build the Future of <span className='font-gilroy-extrabold'>Web3 Investment</span></h1>
                        <Image src={'/img/barcode.webp'} width={279} height={34} alt='barcode-image'/>
                    </div>

                </div>
            </div>
            <div className="obj obj-1"></div>
            <div className="obj obj-2"></div>
            <div className="obj obj-3"></div>
        </section>
    )
}

export default HeroSec