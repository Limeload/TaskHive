import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

function ProjectForm({addNewProject, user}) {
    const [projectName, setProjectName] = useState("")

    function handleProjectName(e) {
        setProjectName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newProject = {
            name: projectName,
            user_id: user.id
        }

    fetch("/projects", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newProject)
    })
    .then(res => res.json())
    .then(addNewProject)
    // window.location.href = '/profile'
    }

    return (
        <div className="project-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProjectName">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                        onChange={handleProjectName}
                        value={projectName}
                        name="name"
                        type="text"
                        placeholder="Enter project name..."
                    />
                </Form.Group>
                <Button className="btn-feature" variant="primary" type="submit">
                    Create Project
                </Button>
            </Form>
        </div>
    )
}

export default ProjectForm;
