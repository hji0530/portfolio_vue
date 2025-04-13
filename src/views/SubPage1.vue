<template>
  <div>
    <div class="bg">
      <h1>Welcome, 찐햄의 포트폴리오에 오신 걸 환영합니다! ✨</h1>
      <p>이 페이지는 Vue 2 + Router 기반으로 만들어졌습니다.</p>
    </div>

    <div class="wrapper">
      <!-- reveal 효과 -->
      <section class="section reveal-section">
        <h2 class="reveal-text">👋 Hello, Reveal!</h2>
      </section>

      <!-- pin 효과 -->
      <section class="section pin-section">
        <h2 class="pin-text">📌 I’m Pinned!</h2>
      </section>

      <!-- parallax 효과 -->
      <section class="section parallax-section">
        <div class="parallax-container">
          <div class="parallax-img"></div>
          <h2 class="parallax-text">🌄 Parallax Rocks!</h2>
        </div>
      </section>

      <section class="intro-section">
        <h2 class="intro-text left">Creative</h2>
        <h2 class="intro-text right">Direction</h2>
      </section>

      <section class="split-section">
        <h2 class="split-text">Design Meets Strategy With Passion</h2>
      </section>
    </div>

    <div class="bg">
      <h1>Welcome, 찐햄의 포트폴리오에 오신 걸 환영합니다! ✨</h1>
      <p>이 페이지는 Vue 2 + Router 기반으로 만들어졌습니다.</p>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  name: 'SubPage1',

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // reveal
    gsap.from('.reveal-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.reveal-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // pin
    ScrollTrigger.create({
      trigger: '.pin-section',
      start: 'top top',
      end: '+=500',
      pin: true,
      pinSpacing: true,
    });

    // parallax
    gsap.to('.parallax-img', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-section',
        start: 'top bottom',
        end: '+=500',
        scrub: true,
        markers: true,
      },
    });

    // gsap.utils.toArray('.intro-text').forEach((el) => {
    //   gsap.to(el, {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: 'power2.out',
    //     scrollTrigger: {
    //       trigger: el,
    //       start: 'top 85%',
    //       end: 'top 40%',
    //       scrub: true, // 💡 스크롤에 따라 부드럽게 연동
    //       markers: true, // 디버깅용
    //     },
    //   });
    // });

    gsap.to('.intro-text.left', {
      xPercent: -100,
      opacity: 0,
      duration: 4,

      scrollTrigger: {
        trigger: '.intro-text.left',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        markers: true,
      },
      ease: 'power2.out',
    });

    gsap.to('.intro-text.right', {
      xPercent: 100,
      opacity: 0,
      duration: 5,

      scrollTrigger: {
        trigger: '.intro-text.right',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        markers: true,
      },
      ease: 'power2.out',
    });

    // 1. 텍스트 쪼개기
    const el = document.querySelector('.split-text');
    const words = el.innerText.split(' ');
    el.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(' ');

    // 2. 단어별 순차 애니메이션

    gsap.from('.word', {
      y: 100, // y축으로 50px 아래에서 시작 (아래에서 위로 올라오듯 등장)
      opacity: 0, // 완전 투명한 상태에서 시작 → 점점 나타나게 함
      stagger: 0.15, // 각 단어(.word)마다 0.15초 간격으로 순차 실행 (연속적으로 나타나는 효과)
      ease: 'power2.out', // 부드럽게 끝나는 이징 함수 → 자연스럽게 튀어나오는 느낌
      duration: 3,
      scrollTrigger: {
        trigger: '.split-section', // 이 요소가 기준이 되어 애니메이션이 트리거됨
        start: 'top 70%', // .split-section의 top이 뷰포트의 70% 지점에 닿을 때 시작
        toggleActions: 'play reverse play reverse',
      },
    });
  },
};
</script>

<style scoped>
.bg {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background: linear-gradient(135deg, #f0f8ff, #e6e6fa);
  text-align: center;
}

.trigger-section {
  height: 150vh;
  background: #f0f0f0;
  padding: 100px;
  text-align: center;
}

.wrapper {
  font-family: sans-serif;
}

.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: white;
  padding: 2rem;
  text-align: center;
}

.reveal-section {
  background: #1e1e2f;
}

.pin-section {
  background: #4a3f94;
}

.parallax-section {
  height: 150vh;
  position: relative;
  background-color: #1c1c1c;
}

.parallax-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.parallax-img {
  position: absolute;
  top: 10%;
  left: 40%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background-color: #4a3f94;
  opacity: 0.8;
  z-index: 0;
}

.parallax-text {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: white;
}

.intro-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1c1c1c;
}

/* .intro-text {
  font-size: 4rem;
  opacity: 0;
  transform: translateX(0);
  transition: opacity 0.3s ease;
  will-change: transform, opacity;
  color: #fff;
} */

.intro-text {
  font-size: 4rem;
  opacity: 1;
  transform: translateX(0);
  will-change: transform, opacity;
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}

.intro-text.left {
  transform: translateX(-100px);
}

.intro-text.right {
  transform: translateX(100px);
}

.split-section {
  width: 100%;
  height: 40vh;
  background-color: beige;
}
.word {
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
}
</style>
