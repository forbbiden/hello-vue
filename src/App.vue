<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/directives">Directives</router-link> |
      <router-link to="/computed-attr">Computed Attribute</router-link> |
      <router-link to="/todo">TodoList</router-link> |
      <router-link to="/haha">Haha</router-link> |
      <router-link to="/style">Style</router-link> |
      <router-link to="/event">Event</router-link> |
      <router-link to="/component">Component</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
