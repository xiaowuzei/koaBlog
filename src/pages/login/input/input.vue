<template>
    <div class="input-wrapper">
        <label ref="title" :for="title" class="input-label">{{ title }}</label>
        <input autocomplete="new-password" :type="type" @focus.stop="focusEvent" @blur.stop="blurEvent"  @input="inputEvent($event.target.value)" :id="title"
        @keyup.enter="keyupEvent">
        <div class="line" ref="line"></div>
    </div>
</template>
<script>
export default {
  props: {
    type: {
      validator: function(val) {
        return ["text", "password"].indexOf(val) > -1;
        // 如果错误提示：Invalid prop: custom validator check failed for prop "type".
      },
      default: "text"
    },
    title: {
      type: String
    },
    value: {
      default: ""
    }
  },
  methods: {
    focusEvent() {
      let oTitle = this.$refs.title;
      let oLine = this.$refs.line;
      oTitle.style.color = "rgb(82,97,107)";
      oTitle.style.webkitTransform = "translate(0, -30px) scale(.5)";
      oTitle.style.MozTransform = "translate(0, -30px) scale(.5)";
      oTitle.style.msTransform = "translate(0, -30px) scale(.5)";
      oTitle.style.OTransfrom = "translate(0, -30px) scale(.5)";
      oTitle.style.transform = "translate(0, -30px)";
      oTitle.style.fontSize = "25px";
      oLine.style.width = "500px";
    },
    blurEvent() {
      if (this.value == "") {
        let oTitle = this.$refs.title;
        let oLine = this.$refs.line;
        oTitle.style = "";
        oLine.style = "";
      }
    },
    inputEvent(val) {
      this.$emit("input", val);
    },
    keyupEvent() {
      this.$emit("enter");
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.input-wrapper {
  width: 500px;
  margin: 40px auto;
  position: relative;
  label {
    position: absolute;
    top: 2px;
    font-size: 32px;
    color: #3f4f5b;
    transition: all 0.3s;
  }
  input {
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #d5d5d5;
    padding: 10px 0;
    font-size: 20px;
    text-indent: 10px;
  }
  .line {
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #f09313;
    transition: all 0.3s ease-in-out 0.1s;
  }
}
</style>
