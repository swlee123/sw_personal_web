'use client'
import React, { useCallback } from 'react'
import { Particles } from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { loadSlim } from 'tsparticles-slim';
import particle_config from './particlesjs-config';

const ParticlesBackground = () => {
    
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log("Success particles")
        await console.log(container);
    }, []);

    console.log("Rendering ParticlesBackground component");
    
    return (
        <div>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={particle_config}
            />
        </div>
    )
}

export default ParticlesBackground