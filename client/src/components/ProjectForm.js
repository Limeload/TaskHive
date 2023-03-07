import React, {useState} from "react"


function ProjectForm({addNewProject}) {
    const [projectName, setProjectName] = useState("")

    function handleProjectName(e) {
        setProjectName(e.target.value)
    }

    function handleSubmit() {
        const newProject = {
            name: projectName
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
    }

    return (
        <div className = "project-form">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleProjectName}
                    value={projectName}
                    name= "name"
                    type="text"
                    placeholder= "enter project name..."
                />
                <button type="submit">Create Project</button>
            </form>
        </div>
    )
}


export default ProjectForm
