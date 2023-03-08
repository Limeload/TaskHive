import React from "react";
import ProjectPageTask from "./ProjectPageTask"


function ProjectPageTaskList({projectTasks}) {

    const ProjectTaskMap = projectTasks.map(projectTask => {
        return <ProjectPageTask
            id={projectTask.id}
            title={projectTask.title}
            description={projectTask.description}
            deadline={projectTask.deadline}
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
