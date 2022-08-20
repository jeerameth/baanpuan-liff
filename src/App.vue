<template>
  <div id="app">
    <section id="profile">
      <img id="pictureUrl" src="https://mokmoon.com/images/ic_liff.png" />
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { inject } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const $liff = inject('$liff');
    $liff.init(function (data) {});
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
