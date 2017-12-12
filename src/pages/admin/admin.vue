<template>
<div class="page">
    <header>
        <a href=""><img src="../../assets/logo.png" alt=""></a>
        <div class="logout">退出</div>
    </header>
    <aside>
        <v-aside></v-aside>
    </aside>
   <section>
   
                <keep-alive><router-view></router-view></keep-alive>
     
        </section>
</div>
</template>
<script>
import aside from "./aside/aside";
export default {
  components: {
    "v-aside": aside
  }
};
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f3f3f3;
  header {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    background-color: #fbfbfb;
    box-shadow: 0px 1px 2px #969696;
    a {
      float: left;

      img {
        width: 50px;
        height: 30px;
        vertical-align: middle;
      }
    }
    .logout {
      float: right;
    }
  }
  aside {
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 130px;
  }
  section {
    position: absolute;
    min-width: 630px;
    top: 70px;
    left: 140px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    overflow: hidden;
  }
}
</style>
