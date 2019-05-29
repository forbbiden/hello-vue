<template>
  <div>
    <h1>Vue Directives: Vue指令</h1>
    <div class="Directives">
      <h1>Directives: v-if</h1>
      <input type="button" :value="seen ? ' << 隐藏 >> ' : ' << 显示 >> '" @click="seenSwitch" />
      <p v-if="seen">指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：</p>
      <hr>
      <h1>Directives: v-bind</h1>
      <p>缩写：v-bind:arg="xxx" => :arg="xxx"</p>
      <textarea rows="10" cols="200" v-model="bindInput" />
      <p>{{ bindInput }}</p>
      <hr>

      <h1>Directives: v-on</h1>
      <p>缩写：v-on:event="xxx" => :event="xxx"</p>
      单件按钮，统计单击次数：
      <input type="button" v-model="count" @click="onTest" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Directives",
  data: function() {
    return {
      seen: true,
      bindInput: "bind指令练习，你在此随意输入，观察下面文字变化 ...",
      count: 0
    };
  },
  methods: {
    seenSwitch() {
      this.seen = !this.seen;
    },
    onTest() {
      if (null == this.count) {
        this.count = 0;
      }
      this.count++;
    }
  }
};
</script>

<style scoped>
.Directives {
  text-align: left;
  margin-left: 100px;
  font-size: 18px;
}
</style>
