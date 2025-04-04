
import axios  from 'axios';
const api = axios.create({
    baseUrl : 'https://jsonplaceholder.typicode.com/posts',
    headers  : {
        content_type : 'application/json',
    }
})

export const apiService = {
    getPosts : () => api.get('/posts')
}