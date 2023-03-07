import React from "react";
import ProjectPageTask from "./Task.js"


function ProjectPageTaskList({projectTasks}) {

    const ProjectTaskMap =  projectTasks.map(projectTask => {
        <ProjectPageTask
            id={projectTask.id}
            title={projectTask.title}
            description={projectTask.description}
            deadline={projectTask. deadline}
            priority={projectTask.priority}
            completed={projectTask.completed}
            key={projectTask.id}
        />
    })

    return (
  <div className="tasks">
    {ProjectTaskMap}
  </div>
    )
}


export default ProjectPageTaskList
