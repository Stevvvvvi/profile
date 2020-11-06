import React, { useEffect } from 'react';
import './projects-page.styles.scss';
import meta1 from '../../assets/meta1.png';
import legacy1 from '../../assets/legacy1.png';
import davisstudios1 from '../../assets/davisstudios1.png'
import wob1 from '../../assets/wob1.png'
import Project from '../../component/project/project.component';

const projectsData=[
    {
        id:1,
        name:"Meta Uni Esports",
        img:meta1,
        description:`Frontend Development`,
        website:'https://metaue.gg/'

    },
    {
        id:2,
        name:"Legacy Esports",
        img:legacy1,
        description:"Frontend Design, Development",
        website:'https://legacyesports.com.au/',
    },
    {
        id:3,
        name:"Davis Studios",
        img:davisstudios1,
        description:"Front Backend Development",
        website:'https://davisstudios.co/',
    },
    {
        id:4,
        name:"Wine of the Bean",
        img:wob1,
        description:"Front Backend Deployment",
        website:'https://www.wineofthebean.com.au/',
    },
    
]
const Projects=()=>{
    return (
        <div className="projects-container">
            <h1 style={{position:'absolute',top:'50px',left:'5%'}}>My Projects</h1>
            {projectsData.map(({id,...props})=>
            (<Project key={id} id={id} {...props} />)
            )}
        </div>
    )
}

export default Projects;