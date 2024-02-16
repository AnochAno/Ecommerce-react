import axios from 'axios'

const REST_API_Common_URL = 'http://localhost:8080/api/employes'

export const listempoyes = () => axios.get(REST_API_Common_URL);
export const createEmploy = (employe) => axios.post(REST_API_Common_URL, employe);
