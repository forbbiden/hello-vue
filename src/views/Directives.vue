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
      <br>
      <hr>

      <h1>Directives: v-if v-else-if v-else</h1>
      <p>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。</p>
      <h1 v-if="awesome">也可以用 v-else 添加一个“else 块”：</h1>
      <a @click="awesomeSwitch" :style="{ color: 'green' }">{{ awesome ? "Hidden" : "Show" }}</a>

      <h1 v-if="awesome">呵呵</h1>
      <h1 v-else>哈哈</h1>
      <br>
      <hr>

      <h1>Directives: v-key</h1>
      <a @click="loginTypeSwitch" :style="{ color: 'green', fontSize: '20px', 'padding-bottom': '40px'}">切换登录方式</a>
      <hr>
      <template v-if="loginType === 'username'">
        <label>Username: </label>
        <input placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Email: </label>
        <input placeholder="Enter your email address">
      </template>
      这种在切换时不会丢掉输入的内容
      <hr>
      <template v-if="loginType === 'username'">
        <label>Username: </label>
        <input placeholder="Enter your username" key="username">
      </template>
      <template v-else>
        <label>Email: </label>
        <input placeholder="Enter your email address" key="email">
      </template>
      这种在切换时会丢掉输入的内容

      <br>
      <hr>
      <br>
      <h1 @click="showSwitch">Directives: v-show</h1>
      <p v-show="showFlag">带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。</p>

      <br>
      <hr>
      <h1>Directives: v-for</h1>
      <ul>
        <li v-for="(item, i) in items" :key="i">{{ item }}</li>
        <li><hr></li>
        <li v-for="(item, i) of items" :key="i">{{ item }}</li>
      </ul>
      <hr>
      你也可以用 v-for 通过一个对象的属性来迭代。
      <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }}. {{ name }} = {{ value }}
      </li>
    </ul>

    <br>
    <hr>
    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
      <hr>
      <span v-for="n in size" :key="n">{{ n }} </span>
    </div>
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
      count: 0,
      awesome: true,
      loginType: "username",
      showFlag: true,
      items: [ "Foo", "Bar" ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      size: 5
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
    },
    awesomeSwitch() {
      this.awesome = !this.awesome;
    },
    loginTypeSwitch() {
      if ("username" === this.loginType) {
        this.loginType = "email";
      } else {
        this.loginType = "username";
      }
    },
    showSwitch() {
      this.showFlag = !this.showFlag
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
