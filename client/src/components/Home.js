import React from "react";
import ProjectList from "./ProjectList";
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


function Home() {
    return (
        <div className='home'>
            <h1>Welcome to TaskHive</h1>
            <Link to="/login"><Button variant="warning">Log in / Register</Button></Link>
            <ProjectList />
        </div>
    )
}


export default Home
