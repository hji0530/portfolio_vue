<template>
  <div>
    <!-- INTRO -->
    <section class="section-01">
      <div class="l-center">
        <p>김현지의 포트폴리오 입니다</p>
      </div>
    </section>
    <!-- PORTFOLIO -->
    <section class="sec section-02">
      <div class="l-center">
        <p class="sec-title">${ PORTFOLIO }</p>
      </div>
    </section>
    <!-- MY SKILLS -->
    <section class="sec section-03">
      <div class="l-center">
        <p class="sec-title">${ MY SKILLS }</p>
        <div class="skills-grp m-center">
          <div class="main-skill-grp flex">
            <div class="main-skill skill-1">
              <div class="img-grp">
                <img src="/images/html.png" alt="html icon" />
              </div>
              <p class="skill-name">HTML</p>
            </div>
            <div class="main-skill skill-2">
              <div class="img-grp">
                <img src="/images/css.png" alt="html icon" />
              </div>
              <p class="skill-name">CSS</p>
            </div>
            <div class="main-skill skill-3">
              <div class="img-grp">
                <img src="/images/js.png" alt="html icon" />
              </div>
              <p class="skill-name">Javascript</p>
            </div>
            <div class="main-skill skill-4">
              <div class="img-grp">
                <img src="/images/html.png" alt="html icon" />
              </div>
              <p class="skill-name">Vue</p>
            </div>
          </div>
          <div class="sub-skill-grp flex">
            <div class="inner left">
              <div class="sub-skill sskill-04">
                <img src="/images/VSCode.png" alt="html icon" />
              </div>
              <div class="sub-skill sskill-05">
                <img src="/images/GitHub.png" alt="html icon" />
              </div>
            </div>
            <div class="inner right">
              <div class="sub-skill sskill-03">
                <img src="/images/Figma.png" alt="html icon" />
              </div>
              <div class="sub-skill sskill-01">
                <img src="/images/Photoshop.png" alt="html icon" />
              </div>
              <div class="sub-skill sskill-02">
                <img src="/images/Illustrator.png" alt="html icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ABOUT ME  -->
    <section class="sec section-04">
      <div class="l-center">
        <p class="sec-title">${ ABOUT ME }</p>
        <div class="inner-grp flex">
          <div class="img-grp">
            <img src="/images/kji_img.jpg" alt="photo" />
          </div>
          <div class="right-grp">
            <p class="ttl">
              안녕하세요! 저는 변화하는 웹 퍼블리셔 김현지입니다.<br />
              현실에 안주 하지 않고, 모두가 함께 함께 성장하는 것을 지양합니다.<br />
              친절함과 즐거움 속에서 함께 성장해 나가고 싶습니다.
            </p>
            <div class="right-inner flex">
              <div class="history-grp">
                <p class="history-title">Experience</p>
                <div class="history-list">
                  <span class="date">2023.09 – Present</span>
                  <p class="list-txt">포켓컴퍼니 개발팀</p>
                </div>
                <div class="history-list">
                  <span class="date">2023.05 – 2023.09</span>
                  <p class="list-txt">한국온라인광고연구소 웹퍼블리싱1과</p>
                </div>
              </div>
              <div class="history-grp">
                <p class="history-title">Education</p>
                <div class="history-list">
                  <span class="date">2021. 11 - 2022. 05</span>
                  <p>PWA 제작 프론트엔드 개발 과정 수료<span class="sub-tt">[스마트웹 & 콘텐츠개발]</span></p>
                </div>
                <div class="history-list">
                  <span class="date">2016. 03 - 2020. 02</span>
                  <p class="list-txt">강원대학교<span class="sub-tt">치위생학과(4년제)</span></p>
                </div>
                <div class="history-list">
                  <span class="date">2014. 03 - 2016. 02</span>
                  <p class="list-txt">정왕고등학교</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
