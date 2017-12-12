import axios from 'axios'

export default {
    test(){
      return  axios.post('/api/hello',{username:'hello'})
    },
    testget(){
        return axios.get('/api/hello',{params:{
            username:'get'
        }})
    },
    login(data){
        return axios.post('/api/login',data)
    },
    createArticle(data){
        return axios.post('/api/articles', data);
    },
}