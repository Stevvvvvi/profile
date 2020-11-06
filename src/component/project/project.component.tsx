import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './project.styles.scss';

interface props{
    id:number,
    name:string,
    img:string,
    description:string,
    website:string,
}
const Project=({id,name,img,description,website}:props)=>{
    const ref=useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const element = document.querySelector(".project-box");
        if (ref&& ref.current){VanillaTilt.init(ref.current,{max:27,speed:400})}
        //element.addEventListener("tiltChange", callback);
    },[])
    return <div className="project-box" ref={ref} onClick={()=>window.open(website)}>
        <div className='img-box'>
            <img src={img} alt='project' />
        </div>
        <div className="description">
            <div className="description2">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
}

export default Project;