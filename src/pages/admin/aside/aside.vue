<template>
  <nav class="aside-nav">
      <ul class="aside-nav-list">
              <router-link to="/admin/article" tag="li" active-class="active" class="aside-nav-list">
                <i class="iconfont icon-blueberrypublish"></i>发布文章
            </router-link>
            <router-link to="/admin/list" tag="li" active-class="active" class="aside-nav-list">
                <i class="iconfont icon-articleb"></i>文章管理
            </router-link>
            <router-link to="/admin/tags" tag="li" active-class="active" class="aside-nav-list">
                <i class="iconfont icon-tag"></i>标签管理
            </router-link>
            <router-link to="/admin/me" tag="li" active-class="active" class="aside-nav-list">
                <i class="iconfont icon-introduce"></i>关于我
            </router-link>
      </ul>
  </nav>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.aside-nav {
  background: #2b3340;
  height: 100%;
  .aside-nav-list {
    .aside-nav-list {
      position: relative;
      height: 48px;
      line-height: 48px;
      padding-left: 43px;
      font-size: 16px;
      color: #b0afa8;
      cursor: pointer;
      .iconfont {
        position: absolute;
        top: 0;
        left: 17px;
      }
      &.active {
        background: rgba(176, 175, 168, 0.3);
        color: #fff;
      }

      &:hover {
        background: rgba(176, 175, 168, 0.3);
      }
    }
  }
}
</style>
