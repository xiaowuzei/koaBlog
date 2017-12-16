<template>
    <div class="tag">
        <div class="tag-modify">
            <i class="iconfont icon-write" ></i>
        </div>
        <div class="tag-content">
            <input type="text" class="tag-input"   ref="tagInput">
        </div>
        <div class="tag-delete">
            <i class="iconfont icon-delete2"></i>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/_setting';

.tag
    position: relative
    display: inline-block
    width: 170px
    margin: 5px
    height: 50px
    padding: 5px 20px 5px 8px
    box-shadow:1px 1px 2px #7D7D7D
    .tag-modify
        float: left
        line-height: 50px
        vertical-align: middle
        i.icon-write
            font-size: 16px
            font-weight: 700 
            cursor: pointer
    .tag-content
        margin-left: 30px
        line-height: 50px
        .tag-input
            border: none
            outline: none
            width: 155px
    .tag-delete
        position: absolute
        right: 5px
        top: 0
        cursor: pointer
        i.icon-delete2
            font-weight: 700
            color: $green

</style>