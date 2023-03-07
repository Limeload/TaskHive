import React, { useState, useEffect } from "react";
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import ProjectList from './components/Project.js'
import UserTaskList from './components/UserTaskList.js'
import TagList from './components/TagList.js'
import CommentList from './components/CommentList.js'
import NotFound from './components/NotFound.js'
import ProjectForm from "./components/ProjectForm"
import ProjectPage from "./components/ProjectPage"

function App() {
  const [count, setCount] = useState(0);
  const [projects, setProjects] = useState([])
  const [userTasks, setUserTasks] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

    // Project Fetch
     fetch("/projects")
     .then(res => res.json)
     .then(projectData => setProjects(projectData))

     // passes project id
        let projectId;
     const passProjectId = (id) => {
         projectId = id
     }

     // project form helper function
     const addNewProject = (newProject) => {
        const newProjectData = [...projects, newProject]
        setProjects(newProjectData)
     }

     


     // Task Fetch
     fetch("/user/:id")
     .then(res => res.json())
     .then(userTaskData => setUserTasks(userTaskData.tasks))

  return (
    <div className="App">
      <h1>Task Hive
        {/* {count} */}
      </h1>
      <div className='navBar'>
        <Profile />
      </div>
      <div className='mainContainer'>
        <Home />
        <NotFound />
        <UserTaskList userTasks={userTasks}/>
        <CommentList />
        <TagList />
        <ProjectList projects={projects} passProjectId={passProjectId}/>
        <ProjectPage projectId={projectId}/>
        <ProjectForm addNewProject={addNewProject}/>
      </div>
    </div>
  );
}

export default App;
