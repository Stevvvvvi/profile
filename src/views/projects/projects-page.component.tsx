import React from 'react';
import './projects-page.styles.scss';
import meta1 from '../../assets/meta1.png';
import legacy1 from '../../assets/legacy1.png';
import Project from '../../component/project/project.component';

const projectsData=[
    {
        id:1,
        name:"Meta Uni Esports",
        img:meta1,
        description:'hasdfasdfasdfsdddd'

    },
    {
        id:2,
        name:"Legacy Esports",
        img:legacy1,
        description:"asdfsadfasdfsdfsdfasfd"
    }
]
const Projects=()=>{
    return (
        <div className="projects-container">
            {projectsData.map(({id,...props})=>
            (<Project key={id} id={id} {...props} />)
            )}
        </div>
    )
}

export default Projects;