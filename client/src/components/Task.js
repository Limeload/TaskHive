import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
// import ProjectPage from "./ProjectPage";

function Task({id, title, description, deadline, priority, completed, project_name, onEditTask, onDeleteTask}) {
  const initialFormValues = {
    description: "",
    deadline: "",
    priority: "",
    completed: "",
    project_name: ""
  };

  const [showingEditForm, setShowingEditForm] = useState(false);
  const [formData, setFormData] = useState(initialFormValues);


  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleShowForm(e) {
    setShowingEditForm(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const requestObj = {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch(`/tasks/${id}`, requestObj)
    .then(response => response.json())
    .then(modifiedTask => {
        onEditTask(modifiedTask);
        setFormData(initialFormValues);
        setShowingEditForm(false);
        window.location.href = '/profile'
    });
  }

  const form = (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={handleFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Deadline</Form.Label>
        <Form.Control
          type="text"
          name="deadline"
          value={formData.deadline}
          onChange={handleFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          type="text"
          name="priority"
          value={formData.priority}
          onChange={handleFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="radio"
          name="completed"
          label="Completed"
          value={formData.completed}
          onChange={handleFormData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="text"
          name="completed"
          label="Project name"
          value={formData.project_name}
          onChange={handleFormData}
        />
      </Form.Group>
      <Button type="submit">Finish</Button>
    </Form>
  );

  function handleDeleteTask() {
    fetch(`/tasks/${id}`, {
      method: "DELETE"
    }).then(() => onDeleteTask(id));
    // window.location.href = '/profile'
  }

  return (
    <div className="Task">
      <Table className="task-item" onClick={handleShowForm}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Completed</th>
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>{title}</td>
            <td>{description}</td>
            <td>{deadline}</td>
            <td>{priority}</td>
            <td>{completed}</td>
            <td>{project_name}</td>
          </tr>
        </tbody>
      </Table>
      <Button className="btn-feature" variant="danger" onClick={handleDeleteTask}>
        Delete
      </Button>
      {showingEditForm ? form : (
        <Button className="btn-feature" onClick={handleShowForm}>Edit</Button>
      )}
    <Button className="btn-feature" variant="primary">
      Create New Task
    </Button>

    </div>
  );
}

export default Task;
