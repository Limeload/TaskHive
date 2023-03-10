import React from "react";
import Task from './Task.js';


function Project({id, project, onEditTask, onDeleteTask}) {

    // function handleClick() {
    //     passProjectId(id)
    //     // this will pass id and will take you to the project with this specific specific project page
    // }

    console.log(project)

    return (
        <div className='Project'>
        <h2 className="project-name"><i>{project.name}</i></h2>
        {project.tasks ?
            project.tasks.map(task => {
                return <Task
                     id={task.id}
                     title={task.title}
                     description={task.description}
                     deadline={task.deadline}
                     priority={task.priority}
                     completed={task.completed}
                     project_name={task.project_name}
                     key={task.id}
                     onEditTask={onEditTask}
                     onDeleteTask={onDeleteTask}
                 />
             })
             :
             <h1>Loading...</h1>
            }
        </div>
    )
}


export default Project
