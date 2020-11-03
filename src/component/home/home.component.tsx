import React, { useEffect, useRef } from 'react';

import './home.styles.scss';
import profile from '../../assets/profile-removebg.png'

const Home=()=>{
    const person=useRef<HTMLImageElement>(null);
    useEffect(()=>{
        window.addEventListener('scroll',function(){
            var value=window.scrollY;
            //console.log(value);
            if (person && person.current && person.current.style){
                console.log(person.current.style)
            }
        })
    })

    return <div className='home'>
        <div className='overlay'>
            <h1>AWS Certified Software Developer</h1>
        </div>
        <img ref={person} className="person" src={profile} alt="profile" style={{filter: "grayscale(1) contrast(6)"}}/>

        
    </div>
}
export default Home;