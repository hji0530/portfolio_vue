<template>
  <div>
    <div class="portfolio-header flex items-c is-active">
      <div class="hd-inner-grp flex items-c justify-b">
        <p class="hd-title f-b f-pop f-ws-n">HYEONJI FORTFOLIO</p>

        <div class="gnb-list-grp flex tab-hide">
          <div class="gnb">Intro</div>
          <div class="gnb">About Me</div>
          <div class="gnb">Portfolio</div>
          <div class="gnb">Experience & Skills</div>
        </div>

        <button class="btn btn-hd-contact f-pop f-m f-ws-n tab-hide">
          Contact <i class="icon icon-arrow-right"></i>
        </button>

        <button class="btn hamburger tab-show-flex">
          <span class="bar bar-top"></span>
          <span class="bar bar-mid"></span>
          <span class="bar bar-bot"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    hdColorType: {
      type: Boolean,
      default: false, // 기본 헤더 컬러 흰색, true 회색
    },
  },
  data() {
    return {
      mobileGnbShow: false,
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.querySelector('.portfolio-header');
      const scrollTop = window.scrollY;
      if (scrollTop != 0) {
        header.classList.add('is-active');
      } else {
        header.classList.remove('is-active');
      }
    },
  },
};
</script>
