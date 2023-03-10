import React, { useState } from "react";
import ProjectPageTaskList from "./ProjectPageTaskList";

function ProjectPage({ user, userProjects, onAddNewTask }) {

let globalProject;
userProjects.forEach(project => {
  globalProject = project
})

  const taskInput = {
    title: "",
    description: "",
    deadline: "",
    priority: 0,
    completed: false,
    projectName: "",
  };
  const [taskData, setTaskData] = useState(taskInput);
  const [addNewTasks, setAddNewTasks] = useState([]);

  function handleTaskData(e) {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

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
      });
  }

  return (
    <div>
      <h1>Create new task</h1>
      <div className="task-form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleTaskData}
            type="text"
            value={taskData.title}
            name="title"
            placeholder="task..."
          />
          <input
            onChange={handleTaskData}
            type="text"
            value={taskData.description}
            name="description"
            placeholder="task description..."
          />
          <input
            onChange={handleTaskData}
            type="text"
            value={taskData.deadline}
            name="deadline"
            placeholder="task deadline..."
          />
          <input
            onChange={handleTaskData}
            type="number"
            value={taskData.priority}
            name="priority"
            placeholder="1-10"
          />
          <select
            onChange={handleTaskData}
            value={taskData.completed}
            name="completed"
          >
            <option value={false}>false</option>
            <option value={true}>true</option>
          </select>
          <input
           onChange={handleTaskData}
           type="text"
           value={taskData.projectName}
           name="projectName"
           placeholder="Project Name"/>
          <button type="submit">Add New Task</button>
        </form>
      </div>
      <div className="project-tasks">
        <ProjectPageTaskList projectTasks={addNewTasks} />
      </div>
    </div>
  );
}

export default ProjectPage;
