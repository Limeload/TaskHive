import React from "react";
import { Table } from "react-bootstrap";

function ProjectPageTask({ title, description, deadline, priority, completed }) {
  return (
    <div className="Task">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{deadline}</td>
            <td>{priority}</td>
            <td>{completed ? "true" : "false"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProjectPageTask;
