import axios from 'axios';

const getRequests = () => axios.get(`/rate_limit`)

export default {getRequests}