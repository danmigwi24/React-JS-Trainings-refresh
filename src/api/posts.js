import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3500',
    timeout: 1000,
    headers: { 'content-Type': 'application/json' }
})

export default instance;

// export default axios.create({
//     baseURL: 'http://localhost:3500',
//     timeout: 1000,
//     headers: { 'content-Type': 'application/json' }
// })