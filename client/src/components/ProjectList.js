import React from "react";
import Project from "./Project"

function ProjectList({user, onEditTask, onDeleteTask}) {

    return (
        <div className='ProjectList'>
                {user && user.projects ?
                    user.projects.map(project => {
                        return <Project
                            id={project.id}
                            project={project}
                            key={project.id}
                            onEditTask={onEditTask}
                            onDeleteTask={onDeleteTask}
                            // passProjectId={passProjectId}
                        />
                    })
                    :
                    <h1>{null}</h1>
                }
        </div>
    )
}

export default ProjectList;
