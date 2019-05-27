<template>
  <div>
    <h1 @click="sayHi">{{ name }}</h1>
    <ul>
      <li v-for="(lan, i) in languages" :key="i">
        {{ lan }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Dark",
  props: {
    name: String,
    languages: Array
  },
  methods: {
    sayHi() {
      alert(`Hi ${this.name}`);
    }
  }
};
</script>
