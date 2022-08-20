<template>
  <div id="app">
    <section id="profile">
      <img id="profileImage" :src="profile.imgUrl" width="10" hight="10" />
      {{ profile.displayName }}
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { inject, onMounted, reactive } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const $liff = inject('$liff');
    const profile = reactive({
      displayName: null,
      imgUrl: null,
    });

    onMounted(async () => {
      await liff.init({ liffId: '1657402535-dDW7EMAl' });
      const response = await liff.getProfile();
      profile.displayName = response.displayName;
      profile.imgUrl = response.pictureUrl;
    });

    return {
      profile,
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
