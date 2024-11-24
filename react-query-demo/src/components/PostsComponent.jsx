import React from "react";
import { useQuery } from "react-query";

// Function to fetch data from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    "posts", // unique key for this query
    fetchPosts,
    { staleTime: 5 * 60 * 1000 } // Data is considered fresh for 5 minutes
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <div>Refreshing...</div>}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
