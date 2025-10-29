<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  mounted() {
    this.$nextTick(() => {
      AOS.init({
        duration: 600,
        once: false,
        easing: 'ease-out',
        offset: 100,
      });
      console.log('AOS initialized ✅');
    });
  },
  watch: {
    '$route.path'() {
      setTimeout(() => {
        AOS.refreshHard();
      }, 300);
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/ui.scss';
</style>
