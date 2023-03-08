import React from "react";
import Task from "./Task.js"


function UserTaskList({userTasks}) {

    const taskMap =  userTasks.map(task => {
       return <Task
            id={task.id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            priority={task.priority}
            completed={task.completed}
            key={task.id}
        />
    })

    return (
  <div className="task-list">
    {taskMap}
  </div>
    )
}



export default UserTaskList
