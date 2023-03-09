import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ProjectList from './ProjectList.js'
// import UserTaskList from './UserTaskList.js'
import TagList from './TagList.js'
import CommentList from './CommentList.js'
import NotFound from './NotFound.js'
import ProjectForm from "./ProjectForm"
import ProjectPage from "./ProjectPage"

function Profile({onLogOut}){
const [user, setUser] = useState({})
const [userTasks, setUserTasks] = useState([])

//LOGOUT CURRENT USER
        function handleLogOut() {
          fetch('/logout', {
              method: 'DELETE'
          })
              .then(() => onLogOut())
      }
//PROFILE
useEffect(() => {
    fetch('/users/1')
        .then(res => res.json())
        .then(user => {
            setUser(user)
            setUserTasks(user.tasks)
        })
  }, [])

  console.log(userTasks)

//   useEffect(() => {
//     setUserTasks(userTasks)
//   }, [])

function onAddNewTask(newTask) {
    setUserTasks([...userTasks, newTask])
}

// // passes project id
// let projectId;
// const passProjectId = (id) => {
//     projectId = id
// }

// // project form helper function
// const addNewProject = (newProject) => {
//    const newProjectData = [...projects, newProject]
//    setProjects(newProjectData)
// }

// // Task Fetch
// fetch(`/users/:id`)
// .then(res => res.json())
// .then(userTaskData => setUserTasks(userTaskData.tasks))

//edits task
function onEditTask(modifiedTask) {
    console.log(modifiedTask)
    console.log("hey")
 const updateTask = userTasks.map(task => task.id === modifiedTask.id ? modifiedTask : task)
 console.log(updateTask)
 setUserTasks(updateTask)
}

// delete tasks
function onDeleteTask(deletedId) {
   const updatedUserTasks = userTasks.filter((task) => task.id !== deletedId)
   setUserTasks(updatedUserTasks)
 }

 return (
    <div className='home'>
        <h1 className='text-1'>Welcome</h1>
         <Link to="/login" onClick={handleLogOut}><Button variant="warning">Log out</Button></Link>
         <div className='mainContainer'>
         <NotFound />
         {/* <UserTaskList /> */}
         {/* <ProjectList />
         <ProjectPage /> */}
         <ProjectForm />
        {/* <UserTaskList userTasks={userTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/> */}
         <CommentList />
        <TagList />
        <ProjectList user={user} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>
        <ProjectPage user={user} onAddNewTask={onAddNewTask}/>
        {/* <ProjectForm addNewProject={addNewProject}/> */}
       </div>
    </div>
        )
    }

export default Profile;
