<template>
  <div>
    <!-- header -->
    <div class="portfolio-header flex items-c is-active">
      <div class="hd-inner-grp flex items-c justify-b">
        <p class="hd-title f-b f-pop f-ws-n p-cursor">HYEONJI FORTFOLIO</p>

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

      <div class="mo-hd-grp">
        <div class="mo-gnb-list-grp">
          <div class="mo-gnb">Intro</div>
          <div class="mo-gnb">About Me</div>
          <div class="mo-gnb">Portfolio</div>
          <div class="mo-gnb">Experience & Skills</div>
        </div>

        <button class="btn btn-hd-contact f-pop f-m f-ws-n">Contact <i class="icon icon-arrow-right"></i></button>
      </div>
    </div>
    <!-- END header -->

    <div class="page main-page">
      <div class="intro-sec pos-r">
        <div class="intro-bg img img-con">
          <video
            class="intro-video img-cov"
            src="@/assets/images/video/video_intro_bg.mp4"
            autoplay
            muted
            loop
            playsinline
          ></video>
        </div>
      </div>

      <!-- About me -->
      <div class="about-sec">
        <div class="about-inner-grp l-center">
          <p class="top-title f-bk f-b f-pop f-center">About Me</p>
          <div class="emoticon-img-grp">
            <img src="@/assets/images/img_emoticon_01.png" alt="이모티콘 이미지" class="emoticon-img" />
          </div>
          <p class="sub-txt f-bk f-r f-center">
            안녕하세요! 저는 변화하는 웹 퍼블리셔 김현지입니다.<br />
            현실에 안주 하지 않고, <br class="mb-show" />모두가 함께 함께 성장하는 것을 지양합니다. <br />
            친절함과 즐거움 속에서 함께 성장해 나가고 싶습니다.
          </p>

          <div class="about-list-grp flex">
            <div class="list-card hover-effect">
              <p class="point-txt f-b">point 01</p>
              <p class="card-title f-b">멈추지 않는 열정 보유</p>
              <p class="card-txt f-r">
                뭐든 즐겁게 열정적으로 해내는<br />
                글정 마인드를 가졌습니다!
              </p>
            </div>
            <div class="list-card hover-effect type-point">
              <p class="point-txt f-b">point 02</p>
              <p class="card-title f-b">탁월한 협업 능력</p>
              <p class="card-txt f-r">
                어느 누구와도 소통을 잘 해내는<br />
                뛰어난 협업 능력 보유
              </p>
            </div>
            <div class="list-card hover-effect">
              <p class="point-txt f-b">point 03</p>
              <p class="card-title f-b">꼼꼼함과 세심함</p>
              <p class="card-txt f-r">
                특유의 책임감으로<br />
                꼼꼼함과 세심함을 가졌습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- PORTFOLIO -->
      <div class="portfolio-sec">
        <div class="portfolio-inner-grp l-center">
          <p class="top-title f-bk f-b f-pop f-center">Portfolio</p>
        </div>
      </div>

      <!-- MY SKILLS -->
      <div class="skills-sec"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
