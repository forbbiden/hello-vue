<template>
  <div>
    <Dark name="Vue coding references" :languages=vueLanguages />
    <hr>
    <Dark name="React coding references" :languages=reactLanguages />
    <hr>
    <TodoList />
  </div>
</template>

<script>
import Dark from "@/components/Dark.vue";
import TodoList from "@/views/TodoList.vue";

export default {
  name: "Haha",
  data: function() {
    return {
      reactLanguages: ['react', 'react-router', 'es2015', 'html', 'js', 'css'],
      vueLanguages: ['vue', 'vuex', 'vue-router', 'es2015', 'html', 'js', 'css']
    };
  },
  components: {
    Dark,
    TodoList
  }
};
</script>
