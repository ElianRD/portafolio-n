<script setup>
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
</script>
<template>
  <div class="h2-container"><h2>Education</h2></div>
  <div class="timeline">
    <div class="timeline__card">
      <div
        :class="{ dark_card_icon: toggle.Theme }"
        class="timeline__card_icon"
      ></div>
      <div
        :class="{ dark_timeline_content: toggle.Theme }"
        class="timeline__card_content"
      >
        <h3>Software Development (2021 - 2024)</h3>
        <div>
          <h4>Instituto Tecnológico de las Américas</h4>
        </div>

        <p>
          During my technological training in Software Development at the
          prestigious ITLA, I had the opportunity to specialize in web
          programming. Through hands-on experiences and constant problem
          solving, I developed a deep understanding of industry standard tools
          and practices, which allowed me to acquire solid and up-to-date skills
          in the field of web development.
        </p>
      </div>
    </div>
    <div class="timeline__card">
      <div
        :class="{ dark_card_icon: toggle.Theme }"
        class="timeline__card_icon"
      ></div>
      <div
        :class="{ dark_timeline_content: toggle.Theme }"
        class="timeline__card_content"
      >
        <h3>Full Stack Developer Bootcamp (09/2022 - 02/2023)</h3>
        <div>
          <h4>Alterna Academy</h4>
        </div>

        <p>
          I took the Junior Full Stack Developer bootcamp at Alterna Academy,
          where for 6 months I took 12 modules that helped me to continue
          developing and acquiring new skills. This experience was fundamental
          to strengthen my knowledge and prepare me to enter the working world
          as a full stack developer.
        </p>
      </div>
    </div>
    <div class="timeline__card">
      <div
        :class="{ dark_card_icon: toggle.Theme }"
        class="timeline__card_icon"
      ></div>
      <div
        :class="{ dark_timeline_content: toggle.Theme }"
        class="timeline__card_content"
      >
        <h3>Web Development School (2022 - 2024)</h3>
        <div>
          <h4>Platzi</h4>
        </div>

        <p>
          I attended Platzi's Web Development School, where I had the
          opportunity to delve into various technologies and tools for the
          development of websites and web applications. Throughout this process,
          I learned from the basics of HTML, CSS and JavaScript, to the use of
          modern frameworks and good development practices.
        </p>
      </div>
    </div>
    <div class="timeline__card">
      <div
        :class="{ dark_card_icon: toggle.Theme }"
        class="timeline__card_icon"
      ></div>
      <div
        :class="{ dark_timeline_content: toggle.Theme }"
        class="timeline__card_content"
      >
        <h3>Responsive Web Design and JavaScript (2021 - 2024)</h3>
        <div>
          <h4>FreeCodeCamp</h4>
        </div>

        <p>
          I completed the certifications “JavaScript Algorithms and Data
          Structures” and “Responsive Web Design” through freeCodeCamp.
          Throughout these certifications, I acquired a deep knowledge in
          algorithms and data structures using JavaScript, as well as in the
          design and development of responsive websites.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.h2-container {
  width: 80%;
  padding: 20px 0;
}
h2 {
  font-size: 4rem;
}
.timeline {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .timeline__card:nth-of-type(2) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/alterna.png");
    }
  }

  .timeline__card:nth-of-type(3) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/platzi.png");
    }
  }

  .timeline__card:nth-of-type(4) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/free.png");
    }
  }
}
.timeline__card {
  min-width: 260px;
  width: 70%;
  margin: 20px;
}
.timeline__card_icon {
  background-image: url("@/assets/logosc/itlalogo.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  border-bottom: 1px solid $primary-color;
  border-top: 1px solid $primary-color;
  border-radius: 6px 6px 0 0;
}

.timeline__card_content {
  font-size: 1.4rem;
  padding: 20px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  background: #fff;
  border-radius: 0 0 6px 6px;
}
.dark_timeline_content {
  box-shadow: 0 30px 60px -12px rgba(255, 255, 255, 0.25),
    0 18px 36px -18px rgba(255, 255, 255, 0.3),
    0 -12px 36px -8px rgba(253, 253, 253, 0.025);
}
.timeline__card_content h3 {
  padding-bottom: 5px;
  color: $primary-color;
}
.timeline__card_content h4 {
  //   padding-bottom: 5px;
}
.timeline__card_content p {
  line-height: 1.5;
}

@media (max-width: 500px) {
  .timeline__card {
    width: 80%;
  }
}
@media (min-width: 600px) {
  .timeline {
    .timeline__card {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      &:nth-of-type(1) {
        flex-direction: row-reverse;
      }
      &:nth-of-type(2) .timeline__card_icon {
        &:before {
          content: "";
          width: 2px;
          height: 120%;
          background: $primary-color;
          position: absolute;
          top: 0%;
          z-index: 1;
          left: 50%;
          transform: translateX(-50%);
          animation: fillTop 1s forwards 2s ease-in-out;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: $primary-color;
          position: absolute;
          left: 0%;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          animation: fillLeftOdd 1s forwards 1s ease-in-out;
        }
      }

      &:nth-of-type(3) {
        flex-direction: row-reverse;
      }
      &:nth-of-type(4) .timeline__card_icon {
        &:before {
          content: "";
          width: 2px;
          height: 0%;
          background: $primary-color;
          position: absolute;
          top: 0%;
          z-index: 1;
          left: 50%;
          transform: translateX(-50%);
          animation: fillTop 1s forwards 1s ease-in-out;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: $primary-color;
          position: absolute;
          left: 0%;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          animation: fillLeftOdd 1s forwards 1s ease-in-out;
        }
      }
    }
  }
  .timeline__card_content {
    z-index: 2;
  }
  .timeline__card_icon {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    position: relative;
    height: 50px;
    padding: 50px;
    border-radius: 50%;
    margin: 0 20px;
    border-bottom: none;
    border-top: none;
    &:before {
      content: "";
      width: 2px;
      height: 120%;
      background: $primary-color;
      position: absolute;
      top: 0%;
      left: 50%;
      right: auto;
      z-index: 1;
      transform: translateX(-50%);
      animation: fillTop 1s forwards 1s ease-in-out;
    }
    &:after {
      content: "";
      width: 100%;
      height: 2px;
      background: $primary-color;
      position: absolute;
      right: 0;
      z-index: 1;
      top: 50%;
      left: auto;
      transform: translateY(-50%);
      animation: fillLeft 1s forwards 1s ease-in-out;
    }
  }
  .dark_card_icon {
    box-shadow: 0 30px 60px -12px rgba(255, 255, 255, 0.25),
      0 18px 36px -18px rgba(255, 255, 255, 0.3),
      0 -12px 36px -8px rgba(255, 255, 255, 0.025);
  }
  .timeline__card_content {
    border-radius: 6px 6px;
  }
}

@keyframes fillLeft {
  100% {
    right: 100%;
  }
}

@keyframes fillTop {
  100% {
    top: 100%;
  }
}

@keyframes fillLeftOdd {
  100% {
    left: 100%;
  }
}
</style>
