import React from 'react';
import './project.styles.scss';

interface props{
    id:number,
    name:string,
    img:string,
    description:string,
}
const Project=({id,name,img,description}:props)=>{
    return <div className="project-box">
        <div className='img-box'>
            <img src={img} alt='project' />
        </div>
        <div className="description">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
}

export default Project;