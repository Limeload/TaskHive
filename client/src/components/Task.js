// import React, { useState } from "react";
import React, { useState } from "react";
// function Task({ title, description, deadline, priority, completed, onEditTask, onDeleteTask }) {

function Task({id, title, description, deadline, priority, completed, onEditTask, onDeleteTask}){

  const initialFormValues = {
    description: "",
    deadline: "",
    priority: "",
    completed: ""
  }

  const [ showingEditForm, setShowingEditForm ] = useState(false)
  const [ formData, setFormData ] = useState(initialFormValues)

  function handleFormData(e) {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  function handleShowForm(e) {
    setShowingEditForm(true)
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const requestObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch(`/tasks/${id}`, requestObj)
    .then(response => response.json())
    .then(modifiedTask => {
        onEditTask(modifiedTask)
        setFormData(initialFormValues)
        setShowingEditForm(false)
    })

  }

  const form =
    <form onSubmit={handleFormSubmit}>
      <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleFormData}>
        </input>
      <label>Deadline</label>
        <input
          type="text"
          name="deadline"
          value={formData.deadline}
          onChange={handleFormData}>
        </input>
      <label>Priority</label>
        <input
          type="text"
          name="priority"
          value={formData.priority}
          onChange={handleFormData}>
        </input>
      <label>Completed</label>
        <input
          type="radio"
          name="completed"
          value={formData.completed}
          onChange={handleFormData}>
        </input>
      <button type="submit">Finish</button>
    </form>

    function handleDeleteTask() {
      fetch(`/tasks/${id}`, {
        method: "DELETE"
      })
      .then(() => onDeleteTask(id))
    }

  return (
    <div className='Task'>
      <table onClick={handleShowForm}>
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
      <button onClick={handleDeleteTask}>Delete</button>
      {showingEditForm ? form : <button onClick={handleShowForm}>Edit</button>}
    </div>
  )
}


export default Task
