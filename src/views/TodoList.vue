<template>
  <div>
    <h1>This is an TodoList page</h1>
    <hr/>
    <div class="todo">
      添加任务： <input type='text' v-model="inputItem" @keyup.enter="addItem" />
      <a @click="clearItems">  |   清空列表 </a>
      <a @click="finish">  |   完成所有</a>
      <a @click="unfinish">  |   未完成所有</a>
    </div>
    <hr/>
    <ul class="list">
      <li v-for="(val, index) in list" :key="index" :class="val.completed ? 'green' : (index%2 == 0 ? 'bg1' : 'bg2')" >
        <input type="checkbox" v-model="val.completed" />
        {{ val ? val.content : 'undefined' }}
        <a @click="deleteItem(index)">删除</a>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "TodoList",
  methods: {
    addItem() {
      if (this.inputItem && this.inputItem.trim().length > 0) {
        this.list.push({
          content: this.inputItem,
          completed: false
        });
      }
      this.inputItem = '';
    },
    deleteItem(i) {
      let ok = confirm(`确认要删除”${this.list[i].content}“吗？`);
      if (ok) {
        this.list.splice(i, 1);
      }
    },
    clearItems() {
      this.list = []
    },
    finish() {
      this.list.forEach(e => e.completed = true);
    },
    unfinish() {
      this.list.forEach(e => e.completed = false);
    }
  },
  data: function() {
    return {
      inputItem: '',
      list: []
    }
  }
};
</script>

<style scoped>
.todo {
  text-align: left;
  color: green;
  font-size: 120%;
}
.todo input {
  font-size: 120%;
}
.list {
  text-align: left;
}
.list a {
  margin-left: 100px;
}

.bg1 {
  background-color: darkgrey;
}
.bg2 {
  background-color: darkkhaki;
}

.green {
  background-color: green;
}
</style>
