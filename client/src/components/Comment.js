import React from "react";
import { Card } from "react-bootstrap";

function Comment({ author, content, date }) {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Comment;
