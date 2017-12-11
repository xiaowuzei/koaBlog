<template>
  <div class="hello">
    <button @click="test">测试post</button>
    <button @click="testget">测试get</button>
  </div>
</template>

<script>
import api from '../api'
export default {

 methods:{
    test(){
        api.test()
  },
  testget(){
      api.testget()
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
