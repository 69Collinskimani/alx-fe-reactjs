// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();  // Grabs the postId from the URL
  return <div>Blog Post ID: {postId}</div>;
}

export default BlogPost;
