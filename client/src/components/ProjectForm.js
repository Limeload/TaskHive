import React, {useState} from "react"


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
