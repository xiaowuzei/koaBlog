<template>
  <div class="login-wrapper">
        <v-input title='username' v-model="username"></v-input>
     <!-- type需要在子组件中通过props体现，而v-model虽然只需要在本页调用，但是此时的input仅仅作为一个组件，无法响应input事件，需要子组件来触发-->
         <v-input v-model="password" title="password" type="password" @enter="login"></v-input>
     <button @click.stop="login">登录</button>
  </div>
</template>
<script>
import api from "../../api";
import input from "./input/input";
export default {
  components: {
    vInput: input
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      api
        .login({
          username: this.username,
          password: this.password
        })
        .then(({ data }) => {
          if (data.status === 1) {
            alert("登录成功");
          } else {
            alert("登录失败");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  margin: 200px auto;
  button {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 500px;
    height: 50px;
    font-size: 25px;
    background: #f09313;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
}
</style>
