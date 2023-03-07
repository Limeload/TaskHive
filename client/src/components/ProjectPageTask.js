import React from "react";



function ProjectPageTask({title, description, deadline, priority, completed}) {

    return (
        <div className='Task'>
        <table>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{deadline}</td>
          <td>{priority}</td>
          <td>{completed}</td>
        </tr>
      </table>
        </div>
    )
}


export default ProjectPageTask
