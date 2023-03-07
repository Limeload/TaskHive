import React from "react";


function Project({id, name, passProjectId}) {

    function handleClick() {
        passProjectId(id)
        // this will pass id and will take you to the project with this specific specific project page
    }



    return (
        <div onClick={handleClick} className='Project'>
        <h2>{name}</h2>
        </div>
    )
}


export default Project
