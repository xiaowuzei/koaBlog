<template>
  <div>
   <input type="text" v-model="tagname"> <a href="javascript:;" @click="createTag">创建标签</a>
   标签展示如下：
   <div  v-for="(item,index) in tags" :key="index"><input ref="tag" type="text" :value="item.name"><span @click="deleteTag(item._id)">删除</span>
     <span @click="editTag(item._id,index)">修改</span>
   </div>
  </div>
</template>
<script>
import api from "../../../api";
export default {
  data() {
    return {
      tagname: ""
    };
  },
  computed: {
    tags() {
      return this.$store.state.allTags;
    }
  },
  created() {
    this.getTag();
  },
  methods: {
    createTag() {
      api.createTag(this.tagname).then(({ data }) => {
        console.log(data);
        this.$store.commit("Tagcreate", data.data);
      });
    },
    getTag() {
      api.getTag().then(res => {
        let tag = res.data.data;
        this.$store.commit("Taggetall", tag);
      });
    },
    deleteTag(data) {
      // console.log(data)
      api.deleteTag(data).then(res => {
        // console.log(res)
        var id = res.data.data._id;
        console.log(id);
        this.$store.commit("Tagdelete", id);
      });
      // this.getTag();
    },
    editTag(id, data) {
      var data = this.$refs.tag[data].value;
      api.editTag(id, data);
    }
  }
};
</script>


