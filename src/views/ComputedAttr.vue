<template>
  <div>
    <h1>计算属性</h1>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <input v-model="message" type="text" />
    <p>计算属性：{{ nowOfComputed }}</p>
    <p>计算属性：{{ nowOfComputed }}</p>
    <p>方法：{{ nowOfMethod() }}</p>
    <p>方法：{{ nowOfMethod() }}</p>
  </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
  name: "ComputedAttr",
  data: function() {
    return {
      message: "Hello Vue !",
      now: Date.now()
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('') // 消息内容反转
    },
    nowOfComputed: function() {
      // 在now不变的情况下，该方法只会执行一次，Vue进行了缓存处理
      console.log("computed#now");
      return this.now;
    }
  },
  methods: {
    nowOfMethod() {
      // 每次都会调用
      console.log("method#now");
      return this.now;
    }
  }
}
</script>

