// import React, { useState } from "react";
import React from "react";
// function Task({ title, description, deadline, priority, completed, onEditTask, onDeleteTask }) {

  // const initialFormValues = {
  //   description: "",
  //   deadline: "",
  //   priority: "",
  //   completed: ""
  // }

  // const [ showingEditForm, setShowingEditForm ] = useState(false)
  // const [ formData, setFormData ] = useState(initialFormValues)

  // function handleFormData(e) {
  //   const { name, value } = e.target
  //   setFormData({...formData, [name]: value})
  // }

  // function handleShowForm() {
  //   setShowingEditForm(true)
  // }

  // function handleFormSubmit(e) {
  //   e.preventDefault()
  //   setShowingEditForm(false)

  //   const requestObj = {
  //     method: "PATCH",
  //     headers: {
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   }

  //   fetch("users/:id/tasks", requestObj)
  //   .then(response => response.json())
  //   .then(modifiedTask => {
  //       onEditTask(formData)
  //       setFormData(initialFormValues)
  //       setShowingForm(false)
  //   })

  // }

  // const form =
  //   <form onSubmit={handleFormSubmit}>
  //     <label>Description</label>
  //       <input
  //         type="text"
  //         name="description"
  //         value={formData.description}
  //         onChange={handleFormData}>
  //       </input>
  //     <label>Deadline</label>
  //       <input
  //         type="datetime-local"
  //         name="Deadline"
  //         value={formData.deadline}
  //         onChange={handleFormData}>
  //       </input>
  //     <label>Priority</label>
  //       <input
  //         type="text"
  //         name="priority"
  //         value={formData.priority}
  //         onChange={handleFormData}>
  //       </input>
  //     <label>Completed</label>
  //       <input
  //         type="radio"
  //         name="completed"
  //         value={formData.completed}
  //         onChange={handleFormData}>
  //       </input>
  //   </form>

  //   function handleDeleteTask() {
  //     fetch('/users/:id/tasks/:id', {
  //       method: "DELETE"
  //     })
  //     .then(() => onDeleteTask(id))
  //   }
  function Task(){

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
        {/* <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{deadline}</td>
          <td>{priority}</td>
          <td>{completed}</td>
        </tr> */}
      </table>
      {/* <button onClick={handleDeleteTask}>Delete</button>
      {showingEditForm ? form : <button onClick={handleShowForm}>Edit</button>} */}
    </div>
  )
}


export default Task
