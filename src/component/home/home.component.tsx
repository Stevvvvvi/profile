import React, { useEffect, useRef, useState } from 'react';

import './home.styles.scss';
import profile from '../../assets/profile-removebg.png'

const Home=()=>{
    // const person=useRef<HTMLImageElement>(null);
    const [offsetY,setOffsetY]=useState(0);
    const handleScroll=()=>setOffsetY(window.pageYOffset);
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    })
    

    return <div className='home'>
        <div className='overlay'>
            <h1 style={{transform:`translateX(-${offsetY*0.2}px)`, opacity:`${1-offsetY/300}`}}>AWS Certified Software Developer</h1>
        </div>
        <img className="person" src={profile} alt="profile" style={{filter: "grayscale(1) contrast(8)",transform:`translateX(${offsetY*1.1}px)`}}/>

        
    </div>
}
export default Home;