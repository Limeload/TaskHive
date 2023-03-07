import React from "react";
import Project from "/Project"


function ProjectList({projects, passProjectId}) {

    const projectMap = projects.map(project => {
        return <Project
            id={project.id}
            name={project.name}
            key={project.id}
            passProjectId={passProjectId}
        />
    })

    return (
        <div className='ProjectList'>
        {projectMap}
        </div>
    )
}


export default ProjectList
