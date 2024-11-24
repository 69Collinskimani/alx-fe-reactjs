// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the dynamic 'id' from the URL

  return <div>Blog Post ID: {id}</div>;  // Display the dynamic ID
}

export default BlogPost;
