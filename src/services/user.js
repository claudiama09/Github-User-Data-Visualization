import axios from 'axios';

const getUser = (user) => axios.get(`/users/${user}`)

const getFollowers = (followers_url) => axios.get(`${followers_url}`) 

const getRepos = (repos_url) => axios.get(`${repos_url}`)

export default {getUser, getFollowers, getRepos}