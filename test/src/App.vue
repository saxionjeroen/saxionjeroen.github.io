<template>
  <div id="app">
    <HelloWorld v-show="screen === 'HelloWorld'" v-on:login="login"/>
    <Factuur v-show="screen === 'generator'"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Factuur from "@/components/factuur/factuur";

export default {
  name: 'App',
  data(){
    return {
      screen: "HelloWorld"
    }
  },
  components: {
    Factuur,
    HelloWorld
  },
  methods: {
    login() {
      this.screen = "generator"
      localStorage.screen = this.screen
    },
    cancel(){
      localStorage.screen = "HelloWorld"
    }
  },
  mounted() {
    if (localStorage.screen) {
      this.screen = localStorage.screen;
    }
  }
}
</script>

<style>
  @import url("https://www.w3schools.com/w3css/4/w3.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://www.w3schools.com/lib/w3-theme-deep-orange.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
