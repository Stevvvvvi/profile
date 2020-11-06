import ParticlesBg from 'particles-bg';
import React, { useEffect } from 'react';
import About from '../../component/about/about.component';
import Home from '../../component/home/home.component';
import Projects from '../projects/projects-page.component';


const HomePage=(props:any)=>{
    useEffect(()=>console.log(props))
    
    return (
        <>
            <Home />
            <About />
            <Projects />
            
            
        </>
    )
}

export default HomePage;