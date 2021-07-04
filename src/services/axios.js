import axios from 'axios';

export const rootUrl = 'https://api.github.com';

export const initAxios = () => {

    axios.defaults.baseURL = rootUrl;

}