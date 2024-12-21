import axios from 'axios';

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username6}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
  }
};

fetchGitHubUser('octocat');
