<template>
    <div class="article-wrapper">
        <div class="article">
             <div class="title">
                <label for="title">文章标题: </label>
                <input type="text" id="title" >
            </div>
            <div class="tag">
                <label for="tag">添加标签: </label>
                <input type="text" id="tag" placeholder="按回车添加标签" >
                <!-- <ul class="tags-wrapper">
                    <li class="has-tag" >
                        <span><i class="iconfont icon-tag i-tag"></i>{{ item.name }}</span>
                        <i class="iconfont icon-delete" @click.stop="deleteTag(item._id, index)"></i>
                    </li>
                </ul> -->
            </div>        
            <textarea id="editor"></textarea>
            <div class="btn">
                <div class="delete" >新建草稿</div>
                <div class="save" >发布文章</div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../../api";
import Simplemde from 'simplemde';
import marked from '../../../assets/js/marked';
//当前的全局变量
let simplemde;

export default {
  methods: {
    post() {
      api.createArticle({
        title: "这是标题",
        content: "这是内容"
      });
    }
  },
  mounted() {
        simplemde = new Simplemde({
            // autoDownloadFontAwesome:false,
            spellChecker:false,
            element: document.getElementById('editor'),
            placeholder: "Press Ctrl+S to save the article...",
            previewRender: function(plainText) {
                return marked(plainText); // Returns HTML from a custom parser
            },
            tabSize: 4
        });
  }
};
</script>
<style lang="stylus">
//必须引为全局样式
// 引入markdown编译器的样式
// 引入双屏时预览时右屏的样式
// 引入只针对code代码的样式

@import '../../../assets/stylus/markdown.styl';
@import '../../../assets/stylus/preview.styl';
@import '../../../assets/stylus/code.styl';

.CodeMirror-fullscreen
        background-color: #fff
.CodeMirror, .CodeMirror-scroll
	    min-height: 400px
</style>

<style lang="stylus" scoped>
@import '../../../assets/stylus/_setting.styl';
.article-wrapper
    width: calc(100% + 20px)
    height: 100%
    overflow-x: hidden
    overflow-y: auto
    .article
        position: relative
        padding: 20px
        .title, .tag
            input 
                height: 25px
                width: 300px
                padding-left: 8px
                margin-bottom: 20px
                border: none
                border-bottom: 1px solid $green
                outline: none
                font-size: 18px
        .tag
            position: relative
            .tags-wrapper
                position: absolute
                left: 391px
                top: 1px
                white-space: nowrap
                overflow: hidden
                font-size: 0
                .has-tag
                    position: relative
                    display: inline-block
                    height: 30px
                    line-height: 30px
                    font-size: 14px
                    margin-right: 20px
                    cursor: pointer
                    .i-tag
                        font-size: 14px
                        padding-right: 5px
                    &:hover
                        &>i 
                            display: block
                    &>i 
                        position: absolute
                        top: -10px
                        right: -14px
                        display: none
                        color: $green
        .btn
            position: absolute
            top: 20px
            right: 20px
            cursor: pointer
            .delete, .save
                display: inline-block
                font-size: 16px
                width: 80px
                height: 30px
                margin-right: 10px
                line-height: 30px
                text-align: center
                border: 1px solid #00
                border-radius: 5px
            .save
                background-color: $green
                color: #fff
                border: 1px solid $green
</style>