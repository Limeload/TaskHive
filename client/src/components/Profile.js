import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList.js";
import TagList from "./TagList.js";
import CommentList from "./CommentList.js";
import NotFound from "./NotFound.js";
import ProjectForm from "./ProjectForm";
import ProjectPage from "./ProjectPage";

function Profile({ currentUser, onLogout }) {
  const [user, setUser] = useState({});
  const [userTasks, setUserTasks] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
  

  // LOGOUT CURRENT USER
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogout(null);
      }
    });
  }

  // PROFILE
  useEffect(() => {
    setInterval( () => {
    fetch(`/me`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setUserTasks(user.tasks);
        setUserProjects(user.projects);
      });
  },1000)
  }, [currentUser]);

  function onAddNewTask(newTask) {
    setUserTasks([...userTasks, newTask]);
  }

  function onEditTask(modifiedTask) {
    const updateTask = userTasks.map((task) =>
      task.id === modifiedTask.id ? modifiedTask : task
    );
    setUserTasks(updateTask);
  }

  function onDeleteTask(deletedId) {
    const updatedUserTasks = userTasks.filter((task) => task.id !== deletedId);
    setUserTasks(updatedUserTasks);
  }
  const addNewProject = (newProject) => {
    const newProjectData = [...userProjects, newProject];
    setUserProjects(newProjectData);
  };

  return (
    <div className="home">
      <div>
        <h1 className="text-1">Welcome</h1>
        <h3>{currentUser?.name}</h3>
      </div>
      <Link to="/login" onClick={handleLogoutClick}>
        <Button variant="primary">Log out</Button>
      </Link>
      <div className="mainContainer">
        <NotFound />
        {/* <CommentList /> */}
        <TagList />
        <ProjectList user={user} onEditTask={onEditTask} onDeleteTask={onDeleteTask}  />
        <ProjectPage user={user} userProjects={userProjects} onAddNewTask={onAddNewTask} />
        <ProjectForm user={user} addNewProject={addNewProject} />
      </div>
    </div>
  );
}

export default Profile;
