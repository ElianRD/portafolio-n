<script setup>
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
</script>

<template>
  <div class="h2-container"><h2>Experience</h2></div>

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
        <h3>Software Engineer (08/2024 - 10/2024)</h3>
        <div>
          <h4>Global Creative Unit</h4>
        </div>

        <p>
          During my experience at Global Creative Unit, I implemented web
          solutions using JavaScript, Vue.js and Bootstrap, creating efficient
          and high quality applications. My work focused on developing intuitive
          and dynamic user interfaces, improving the user experience and
          ensuring optimal performance for the project.
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
        <h3>Software Engineer (05/2023 - 11/2023)</h3>
        <div>
          <h4>Marcos Organizador de Negocios</h4>
        </div>

        <p>
          I had the opportunity to work in organizational business frameworks,
          where I was part of the development of new modules using Odoo and
          Python. This experience allowed me to acquire new knowledge about
          accounting systems and improve my skills in the design and
          implementation of efficient solutions for business management.
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
        <h3>Software Development (2021 - 2024)</h3>
        <div>
          <h4>Instituto Tecnológico de las Américas</h4>
        </div>

        <p>
          While studying at ITLA, I carried out several internships and projects
          that gave me experience in both backend and frontend development and
          database management. This allowed me to strengthen my skills and gain
          a comprehensive approach to software development.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.h2-container {
  width: 80%;
  padding: 0px 0 20px 0;
}
h2 {
  font-size: 4rem;
}
.timeline {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3.2rem;
  }
  .timeline__card:nth-of-type(2) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/marcoson.png");
    }
  }

  .timeline__card:nth-of-type(3) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/itlalogo.png");
    }
  }

  .timeline__card:nth-of-type(4) {
    .timeline__card_icon {
      background-image: url("@/assets/logosc/itlalogo.png");
    }
  }
}
.timeline__card {
  min-width: 260px;
  width: 70%;
  margin: 20px;
}
.timeline__card_icon {
  background-image: url("@/assets/logosc/gcunit.jpg");
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
      &:nth-of-type(3) .timeline__card_icon {
        &:before {
          content: "";
          width: 2px;
          height: 0%;
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
