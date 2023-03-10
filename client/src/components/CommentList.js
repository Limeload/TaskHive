import React from "react";
import Comment from "./Comment";

function CommentList() {
  const comments = [
    {
      author: "John Doe",
      content: "This is a great post!",
      date: "March 10, 2023",
    },
    {
      author: "Jane Smith",
      content: "Thanks for sharing this!",
      date: "March 11, 2023",
    },
  ];

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} content={comment.content} date={comment.date} />
      ))}
    </div>
  );
}

export default CommentList;
