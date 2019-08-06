import axios from 'axios'

const users = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/users'
})

export default users