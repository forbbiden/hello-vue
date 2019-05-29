<template>
  <div>
    <div class="big-font" :class="{ active: isActive, active2: isActive }">
      Vue绑定HTML class 
      <input type="button" :value="isActive ? '禁用样式' : '启用样式'" @click="changeActive" />
    </div>
    <hr>
    <div :class="classObject">
      绑定的数据对象不必内联定义在模板里： v-bind:class="classObject"
    </div>
    <hr>
    <div :class="computedClass">
      渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
    </div>
    <hr>
    <div :class="[class1, class2]">
      数组语法
    </div>
    <hr>
    <h1>绑定内联样式</h1>
    <div :style="{ color: 'red', fontSize: fontSize + 'px' }">
      XXXXXXXX
    </div>
    <div :style="styleObject">
      YYYYYYYY
    </div>
  </div>
</template>
<script>
export default {
  name: "StyleTest",
  data: function() {
    return {
      isActive: true,
      classObject: ["active", "active2", "big-font"],
      class1: "big-font",
      class2: "active",
      fontSize: 20,
      styleObject: {
        color: "green",
        fontSize: "20px"

      }
    }
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    computedClass: function() {
      return {
        active: this.isActive,
        "big-font": true
      }
    }
  }
};
</script>

<style scoped>
.big-font {
  font-size: larger;
}
.active {
  color: darkgreen;
  font-weight: bold;
}
.active2 {
  background-color: lemonchiffon;
}
</style>
