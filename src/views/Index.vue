<template>
  <div>
    <LayoutHeader />
    <div class="page main-page">
      <!-- PORTFOLIO -->
      <div class="intro-sec pos-r">
        <div class="intro-bg img img-con">
          <video
            class="intro-video"
            src="@/assets/images/video/video_intro_bg.mp4"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </div>
      </div>
      <!-- MY SKILLS -->
      <div class="intro-sec"></div>

      <!-- ABOUT ME  -->
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader.vue';

export default {
  name: 'Index',
  components: {
    LayoutHeader,
  },
  data() {
    return {};
  },
};
</script>
