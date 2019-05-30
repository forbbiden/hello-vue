<template>
  <div>
    <a @click="doClick">ClickMe</a>
    <hr>
    <a @click="doClick2('Haha', $event)">ClickMe</a>
    <hr>
    <a v-on:click.once="doClick">Only once</a>
    <hr>
    回车事件
    <input type="text" value="回车提交" v-on:keyup.enter="submit">

  </div>
</template>

<script>
export default {
  name: "Event",
  data: function() {
    return {
    };
  },
  methods: {
    doClick() {
      alert("Click Event !!!");
    },
    doClick2(msg, event) {
      console.log(event);
      alert(msg);
    },
    submit() {
      alert("Do submit !!!")
    }
  }
}
</script>
