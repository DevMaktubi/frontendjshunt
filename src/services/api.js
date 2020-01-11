import axios from 'axios'

const api = axios.create({baseURL: "https://jshunt-nodeapi.herokuapp.com"})

export default api