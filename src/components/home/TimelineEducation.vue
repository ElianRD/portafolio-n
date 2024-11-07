<template>
  <div class="timeline">
    <div
      class="timeline__event animated fadeInUp delay-3s timeline__event--type1"
    >
      <div class="timeline__event__icon">
        <i class="lni-cake"></i>
      </div>
      <div id="fecha" class="timeline__event__date">2021 - 2024</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">
          Instituto Tecnológico de las Américas
        </div>
        <div class="timeline__event__description">
          <p>
            During my technological training in Software Development at the
            prestigious ITLA, I had the opportunity to specialize in web
            programming. Through hands-on experiences and constant problem
            solving, I developed a deep understanding of industry standard tools
            and practices, which allowed me to acquire solid and up-to-date
            skills in the field of web development.
          </p>
        </div>
      </div>
    </div>
    <div
      class="timeline__event animated fadeInUp delay-2s timeline__event--type2"
    >
      <div class="timeline__event__icon">
        <i class="lni-burger"></i>
      </div>
      <div id="fecha" class="timeline__event__date">12/2021 - 02/2022</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">FreeCodeCamp</div>
        <div class="timeline__event__description">
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
    <div
      class="timeline__event animated fadeInUp delay-1s timeline__event--type3"
    >
      <div id="edu3" class="timeline__event__icon">
        <i class="lni-slim"></i>
      </div>
      <div id="fecha" class="timeline__event__date">2022 - 2024</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">Platzi</div>
        <div class="timeline__event__description">
          <p>
            I attended Platzi's Web Development School, where I had the
            opportunity to delve into various technologies and tools for the
            development of websites and web applications. Throughout this
            process, I learned from the basics of HTML, CSS and JavaScript, to
            the use of modern frameworks and good development practices.
          </p>
        </div>
      </div>
    </div>
    <div class="timeline__event animated fadeInUp timeline__event--type1">
      <div class="timeline__event__icon">
        <i class="lni-cake"></i>
      </div>
      <div id="fecha" class="timeline__event__date">09/2022 - 02/2023</div>
      <div class="timeline__event__content">
        <div class="timeline__event__title">Alterna Academy</div>
        <div class="timeline__event__description">
          <p>
            I took the Junior Full Stack Developer bootcamp at Alterna Academy,
            where for 6 months I took 12 modules that helped me to continue
            developing and acquiring new skills. This experience was fundamental
            to strengthen my knowledge and prepare me to enter the working world
            as a full stack developer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$content-width: calc(40vw - 84px);
$margin: 20px;
$spacing: 20px;
$bdrs: 6px;
$circle-size: 40px;
$icon-size: 32px;
$bdrs-icon: 100%;

$color1: #2fd6c4;
$color2: #f6a4ec;

$color3: #87bbfe;
$color4: #555ac0;

$color5: #24b47e;
$color6: #aff1b6;
* {
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
body {
  background: #f6f9fc;
  font-family: "Open Sans", sans-serif;
  color: #525f7f;
}
h2 {
  margin: 5%;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
p {
  font-size: 14px;
  color: black;
}
#edu3 {
  background-image: url("@/assets/logosc/platzi.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#fecha {
  color: black;
}
.timeline {
  display: flex;
  flex-direction: column;
  margin: $margin auto;
  position: relative;

  &__event {
    margin-bottom: $spacing;
    position: relative;
    display: flex;
    margin: $spacing 0;
    border-radius: $bdrs;
    align-self: center;
    width: 60vw;

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
      .timeline__event__date {
        border-radius: 0 $bdrs $bdrs 0;
        z-index: 2;
      }
      .timeline__event__content {
        border-radius: $bdrs 0 0 $bdrs;
        z-index: 2;
      }

      .timeline__event__icon {
        background-image: url("@/assets/logosc/itlalogo.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        &:before {
          content: "";
          width: 2px;
          height: 100%;
          background: $primary-color;
          position: absolute;
          top: 0%;
          left: 50%;
          right: auto;
          z-index: 1;
          transform: translateX(-50%);
          animation: fillTop 1s forwards 2s ease-in-out;
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
          animation: fillLeft 1s forwards 2s ease-in-out;
        }
      }
    }

    &__title {
      font-size: 1.2rem;
      line-height: 1.4;
      text-transform: uppercase;

      font-weight: 600;
      color: $primary-color;
      letter-spacing: 1.5px;
    }
    &__content {
      padding: $spacing;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      background: #fff;
      width: $content-width;
      border-radius: 0 $bdrs $bdrs 0;
      z-index: 2;
    }
    &__date {
      color: red;
      font-size: 1.5rem;
      font-weight: 600;
      background: $color1;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: 0 $spacing;
      border-radius: $bdrs 0 0 $bdrs;
      z-index: 2;
    }
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color1;
      padding: $spacing;
      align-self: center;
      margin: 0 $spacing;
      background: $color2;
      border-radius: $bdrs-icon;
      width: $circle-size;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      padding: 40px;
      height: $circle-size;
      position: relative;

      i {
        font-size: $icon-size;
      }

      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background: $color2;
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
        background: $color2;
        position: absolute;
        left: 0%;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        animation: fillLeftOdd 1s forwards 1s ease-in-out;
      }
    }
    &__description {
      flex-basis: 60%;
    }

    &--type2 {
      &:after {
        background: $primary-color;
      }
      .timeline__event__date {
        color: $color3;
        background: $primary-color;
      }

      &:nth-child(2n + 1) {
        .timeline__event__icon {
          &:before,
          &:after {
            background: $primary-color;
          }
        }
      }

      .timeline__event__icon {
        background-image: url("@/assets/logosc/free.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        color: $color4;
        &:before,
        &:after {
          background: $primary-color;
        }
      }
      .timeline__event__title {
        color: $primary-color;
      }
      .timeline__event__title {
      }
    }

    &--type3 {
      &:after {
        background: $primary-color;
      }
      .timeline__event__date {
        color: $color6;
        background-color: $primary-color;
      }

      &:nth-child(2n + 1) {
        .timeline__event__icon {
          &:before,
          &:after {
            background: $primary-color;
          }
        }
      }

      .timeline__event__icon {
        background: $color6;
        color: $primary-color;
        &:before,
        &:after {
          background: $primary-color;
        }
      }
      .timeline__event__title {
        color: $primary-color;
      }
      .timeline__event__title {
      }
    }
    &:last-child {
      .timeline__event__icon {
        background-image: url("@/assets/logosc/alterna.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        &:before {
          content: none;
          background-color: $primary-color;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .timeline__event__icon {
    height: 150px;
  }
  .timeline__event {
    flex-direction: column;
    align-self: center;
    &__content {
      width: 100%;
    }

    &__icon {
      border-radius: $bdrs $bdrs 0 0;
      width: 100%;
      margin: 0;
      box-shadow: none;

      &:before,
      &:after {
        display: none;
      }
    }
    &__date {
      border-radius: 0;
      padding: $spacing;
    }

    &:nth-child(2n + 1) {
      flex-direction: column;
      align-self: center;

      .timeline__event__date {
        border-radius: 0;
        padding: $spacing;
      }

      .timeline__event__icon {
        border-radius: $bdrs $bdrs 0 0;
        margin: 0;
      }
    }
  }
}
@media (min-width: 500px) {
  .timeline {
    &__event {
      width: 80vw;

      &:nth-child(2n + 1) {
        .timeline__event__content {
          border-radius: $bdrs 0 0 $bdrs;
          z-index: 2;
          width: 70%;
        }
      }

      &__content {
        width: 70%;
      }

      .timeline__event__icon &--type2 {
        &:after {
          background: $color4;
        }
        .timeline__event__date {
          color: $color3;
          background: $color4;
        }

        &:nth-child(2n + 1) {
          .timeline__event__icon {
            background-image: url("@/assets/logosc/itlalogo.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        }

        .timeline__event__icon {
          color: $color4;
          &:before,
          &:after {
          }
        }
        .timeline__event__title {
          color: $primary-color;
        }
        .timeline__event__title {
        }
      }

      &--type3 {
        &:after {
          background: $primary-color;
        }
        .timeline__event__date {
          color: $color6;
          background-color: $primary-color;
        }
      }
      &:last-child {
        .timeline__event__icon {
          &:before,
          &:after {
            background-color: $primary-color;
          }
        }
      }
    }
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
