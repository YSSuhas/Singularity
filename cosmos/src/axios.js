import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://singularity-api.herokuapp.com/'
})

export default instance