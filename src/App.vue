<template>
  <div id="app">
    <section id="profile">
      <img id="profileImage" :src="profile.imgUrl" class="w-12" />
      <div class="text-xl">
        {{ profile.displayName }}
      </div>
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
/* 
#profileImage {
  margin: 0 auto;
  width: 24%;
  display: -moz-box;
  display: -webkit-box;
  display: box;
  -moz-box-pack: center;
  -moz-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  box-pack: center;
  box-align: center;
  -moz-border-radius: 256px;
  -webkit-border-radius: 256px;
  border-radius: 256px;
} */
</style>
