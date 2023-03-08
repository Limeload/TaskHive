import React from "react";
// import { useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProjectList from './Project.js'
import UserTaskList from './UserTaskList.js'
import TagList from './TagList.js'
import CommentList from './CommentList.js'
import NotFound from './NotFound.js'
import ProjectForm from "./ProjectForm"
import ProjectPage from "./ProjectPage"

function Profile({currentUser, onLogOut}){
// const [projects, setProjects] = useState([])
// const [userTasks, setUserTasks] = useState([])

//LOGOUT CURRENT USER
        function handleLogOut() {
          fetch('/logout', {
              method: 'DELETE'
          })
              .then(() => onLogOut())
      }
//PROFILE
// fetch("/projects")
//      .then(res => res.json())
//      .then(projectData => setProjects(projectData))

// // passes project id
// let projectId;
// const passProjectId = (id) => {
//     projectId = id
// }

// project form helper function
// const addNewProject = (newProject) => {
//    const newProjectData = [...projects, newProject]
//    setProjects(newProjectData)
// }

// Task Fetch
// fetch(`/user/:id`)
// .then(res => res.json())
// .then(userTaskData => setUserTasks(userTaskData.tasks))

// //edits task
// function onEditTask(modifiedTask) {
//  const updateTask = userTasks.map(task => task.id === modifiedTask.id ? modifiedUser : task)
//  setUserTasks(updateTask)
// }

// // delete tasks
// function onDeleteTask(id) {
//    const updatedUserTasks = userTasks.filter((task) => task.id !== id)
//    setUserTasks(updatedUserTasks)
//  }
 return (
    <div className='home'>
        <h1 className='text-1'>Welcome <h3>{currentUser.name}</h3></h1>
         <Link to="/login" onClick={handleLogOut}><Button variant="warning">Log out</Button></Link>
         <div className='mainContainer'>
         <NotFound />
         <UserTaskList />
         <ProjectList />
         <ProjectPage />
         <ProjectForm />
        {/* <UserTaskList userTasks={userTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/> */}
         <CommentList />
        <TagList />
        {/* <ProjectList projects={projects} passProjectId={passProjectId}/> */}
        {/* <ProjectPage projectId={projectId}/> */}
        {/* <ProjectForm addNewProject={addNewProject}/> */}
       </div>
    </div>
        )
    }

export default Profile;
