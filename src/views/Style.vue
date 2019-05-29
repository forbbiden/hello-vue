<template>
  <div :class="{ active: isActive, active2: isActive }">
    Vue绑定HTML class 
    <input type="button" :value="isActive ? '禁用样式' : '启用样式'" @click="changeActive" />
  </div>
</template>
<script>
export default {
  name: "StyleTest",
  data: function() {
    return {
      isActive: true
    }
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.active {
  color: darkgreen;
  font-weight: bold;
}
.active2 {
  background-color: lemonchiffon;
}
</style>
