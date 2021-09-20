<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Todos v-bind:greet="greeting" v-bind:employeeArray="employeeArray" />
</template>

<script>
import Todos from "./components/Todos/Todos.vue";

export default {
  name: "App",
  components: {
    Todos,
  },
  data() {
    return {
      greeting: "This is from app.vue",
      employeeArray: [
        {
          id: 1,
          name: "Smit",
        },
        {
          id: 2,
          name: "Amit",
        },
        {
          id: 3,
          name: "Niraj",
        },
        {
          id: 4,
          name: "Aditya",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
