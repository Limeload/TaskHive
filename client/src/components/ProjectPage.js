import React, {useState} from "react"
import ProjectPageTaskList from "./ProjectPageTaskList"

function ProjectPage({projectId}) {
    const [project, setProject ] = useState({})
    const taskInput = {title: "", description: "", deadline:"", priority: 0, completed: ""}
    const [taskData, setTaskData] = useState(taskInput)
    const [jessie, setJessie] = useState([])

    fetch(`/projects/${projectId}`)
    .then(res => res.json())
    .then(projectData => setProject(projectData))

    function handleTaskData(e) {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value })
    }

    function handleSubmit(e) {
        let completionBoolean = e.target.form.completion.value

        const newTask = {
            title: taskData.title,
            description: taskData.description,
            deadline:taskData.deadline,
            priority: taskData.priority,
            completed: completionBoolean
        }

        fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(task => {
            setJessie([...project.tasks, task])
        })
    }



    return (
        <div>
            <h1>{project.name}</h1>
            <div className="task-form">
            <form onSubmit={handleSubmit}>
                <input onChange={handleTaskData} type="text" value={taskData.title} name="title" placeholder="enter task..." />
                <input onChange={handleTaskData} type="text" value={taskData.description} name="description" placeholder="enter task description..." />
                <input onChange={handleTaskData} type="text" value={taskData.deadline} name="deadline" placeholder="enter task deadline..." />
                <input onChange={handleTaskData} type="number" value={taskData.priority} name="priority" placeholder="enter priority..." />
                <select name="completion">
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
                <button type="submit">Add New Task</button>
            </form>
            </div>
             <div className="project-tasks">
                <ProjectPageTaskList projectTasks={jessie}/>
             </div>
        </div>
    )
}


export default ProjectPage
