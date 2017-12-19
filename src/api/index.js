import axios from 'axios'

export default {
  test() {
    return axios.post('/api/hello', {
      username: 'hello'
    })
  },
  testget() {
    return axios.get('/api/hello', {
      params: {
        username: 'get'
      }
    })
  },
  login(data) {
    return axios.post('/api/login', data)
  },
  createArticle(data) {
    return axios.post('/api/articles', data);
  },
  //创建标签
  createTag(data) {
    return axios.post('/api/tag', {
      name: data
    })
  },
  // 获取所有标签
  getTag() {
    return axios.get('/api/tag')
  },
  // 删除标签
  deleteTag(id) {
    return axios.delete(`/api/tag/${ id }?name=wuyushuo`);
  },
  // 修改标签
  editTag(id,data) {
    return axios.patch(`/api/tag/${id}`,{name:data})
  }
}
