import axios from 'axios';

function getRepos(username){
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=5`);
};

function getUserInfo(username){
  return axios.get(`https://api.github.com/users/${username}`);
};

let github = {
  getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          user: arr[1].data
        }
      });
  }
};

export default github;
