import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ProjectPageTaskList from "./ProjectPageTaskList";

function ProjectPage({ user, userProjects, onAddNewTask }) {
  let globalProject;
   userProjects.forEach((project) => {
   return globalProject = project;
  });
  console.log(globalProject)
  const taskInput = {
    title: "",
    description: "",
    deadline: "",
    priority: 0,
    completed: false,
    project_name: "",
  };

  const [taskData, setTaskData] = useState(taskInput);
  const [addNewTasks, setAddNewTasks] = useState([]);

  function handleTaskData(e) {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  }
  //et globalProject = userProjects.filter(project => {
   // return project.name === taskInput.project_name
   //})


  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value)
    const newTask = {
      ...taskData,
      project_id: globalProject.id,
      user_id: user.id,
    };

    fetch("/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((task) => {
        setAddNewTasks([...addNewTasks, task]);
        onAddNewTask(task);
        setTaskData(taskInput);
        window.location.href = '/profile'
      });
  }

  return (
    <div>
      <h3>Create new task</h3>
      <div className="task-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              value={taskData.title}
              name="title"
              placeholder="Task..."
              onChange={handleTaskData}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={taskData.description}
              name="description"
              placeholder="Task description..."
              onChange={handleTaskData}
            />
          </Form.Group>

          <Form.Group controlId="deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="text"
              value={taskData.deadline}
              name="deadline"
              placeholder="MM/DD/YYY"
              onChange={handleTaskData}
            />
          </Form.Group>

          <Form.Group controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              type="number"
              value={taskData.priority}
              name="priority"
              placeholder="1-10"
              onChange={handleTaskData}
            />
          </Form.Group>

          <Form.Group controlId="completed">
            <Form.Label>Completed</Form.Label>
            <Form.Control
              as="select"
              value={taskData.completed}
              name="completed"
              onChange={handleTaskData}
            >
              <option value={false}>false</option>
              <option value={true}>true</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
        <Form.Label>Project Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter project name"
          name="project_name"
          value={taskData.project_name}
          onChange={handleTaskData}
        />
      </Form.Group>

      <Button className="btn-feature" variant="primary" type="submit">
        Add New Task
      </Button>

    </Form>
  </div>

  <div className="project-tasks">
    <ProjectPageTaskList projectTasks={addNewTasks} />
  </div>
</div>
  );
}
export default ProjectPage;
