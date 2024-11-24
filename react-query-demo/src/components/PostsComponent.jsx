import React from "react";
import { useQuery } from "react-query";

// Fetch posts data from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook to fetch data with advanced options
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
    isPreviousData,
    isError, // Added isError state for error handling
  } = useQuery("posts", fetchPosts, {
    // Cache data for 10 minutes, data becomes stale after 5 minutes
    cacheTime: 600000, // 10 minutes
    staleTime: 300000, // 5 minutes
    
    // Refetch data when the window is refocused (when the user returns to the tab)
    refetchOnWindowFocus: true,

    // Retain previous data while refetching
    keepPreviousData: true,
    
    // If data is not fetched yet, it will be considered in the "fetching" state
    refetchOnReconnect: true, // Refetch on reconnect if the internet is re-established
  });

  // Render Loading, Error, and Data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handling error with isError state
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* Display a message if previous data is being shown while fetching */}
      {isPreviousData && <p>Showing previous data...</p>}
    </div>
  );
};

export default PostsComponent;
