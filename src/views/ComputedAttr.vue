<template>
  <div>
    <h1>计算属性</h1>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <input v-model="message" type="text" />
  </div>
</template>
<script>
export default {
  name: "ComputedAttr",
  data: function() {
    return {
      message: "Hello Vue !"
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('') // 消息内容反转
    }
  }
}
</script>

