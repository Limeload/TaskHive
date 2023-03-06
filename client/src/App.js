import React, { useState, useEffect } from "react";
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import ProjectList from './components/Project.js'
import TaskList from './components/TaskList.js'
import TagList from './components/TagList.js'
import CommentList from './components/CommentList.js'
import NotFound from './components/NotFound.js'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

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
        <TaskList />
        <CommentList />
        <TagList />
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
