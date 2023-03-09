import React, { useState } from "react";
import ProjectPageTaskList from "./ProjectPageTaskList";

function ProjectPage({ onAddNewTask }) {
  const taskInput = {
    title: "",
    description: "",
    deadline: "",
    priority: 0,
    completed: false,
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
      project_id: 1,
      user_id: 1,
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
            placeholder="enter task..."
          />
          <input
            onChange={handleTaskData}
            type="text"
            value={taskData.description}
            name="description"
            placeholder="enter task description..."
          />
          <input
            onChange={handleTaskData}
            type="text"
            value={taskData.deadline}
            name="deadline"
            placeholder="enter task deadline..."
          />
          <input
            onChange={handleTaskData}
            type="number"
            value={taskData.priority}
            name="priority"
            placeholder="priority level 1-10..."
          />
          <select
            onChange={handleTaskData}
            value={taskData.completed}
            name="completed"
          >
            <option value={false}>false</option>
            <option value={true}>true</option>
          </select>
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
