<script setup>
import ToggleTheme from "./header/ToggleTheme.vue";
import ToggleLanguage from "./header/ToggleLanguage.vue";
import HamburgBotton from "./header/HamburgBotton.vue";

import { useToggleStore } from "../stores/toggle";

const toggle = useToggleStore();
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/img/logo1.png" alt="" />
    </div>

    <nav
      @click="toggle.toggleHamburgueBotton"
      class="navigation"
      :class="{
        'navigation-active': toggle.HamburgueBotton,
        'active-thema': !toggle.Theme,
      }"
    >
      <div class="container-link">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About me</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <div class="animation start-home"></div>
      </div>

      <div class="toggle-container">
        <ToggleTheme />
        <ToggleLanguage />
      </div>
    </nav>
    <HamburgBotton />
    <!-- <div
      class="hamburger hamburger--spin"
      @click="hamburgerOn"
      :class="{ 'is-active': hamburg }"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div> -->
  </header>
</template>

<style scoped lang="scss">
@import "../assets/hamburger.css";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 70px;
  // position: fixed;
  // background-color: $backgound-black;
  // color: white;
  z-index: 500;
}

.header-logo {
  margin: 0 10px;
  width: 150px;
}
.header-logo img {
  width: 100%;
  height: auto;
}
.navigation {
  background-color: $backgound-black;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.8rem;
  text-align: center;
  position: fixed;
  top: 69px;
  bottom: 0;
  transition: all 0.3s;
  z-index: 999;
  transform: translate(-100%, 0);
}
.active-thema {
  background-color: rgb(255, 255, 255);
}
.navigation .container-link {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.navigation-active {
  transform: translate(0, 0);
}

.navigation {
  a.router-link-exact-active {
    color: white;
  }
}
.active-thema {
  a.router-link-exact-active {
    color: rgb(0, 0, 0);
  }
}
.toggle-container {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
}

.animation {
  position: absolute;
  /* height: 100%; */
  height: 5px;
  /* top: 0; */
  // bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  background-color: $primary-color;
  width: 90px;
  border-radius: 8px;
  transition: all 0.5s ease 0s;
}
.navigation a {
  // background-color: $backgound-black;
  color: $primary-color;
  text-decoration: none;

  z-index: 1;
  padding: 20px;
}

.navigation a.router-link-exact-active:nth-child(1) ~ .animation {
  top: 45px;
}

.navigation a.router-link-exact-active:nth-child(2) ~ .animation {
  top: 110px;
  width: 100px;
}

.navigation a.router-link-exact-active:nth-child(3) ~ .animation {
  top: 170px;
}

.navigation a.router-link-exact-active:nth-child(4) ~ .animation {
  top: 235px;
}
.navigation a:nth-child(1):hover ~ .animation {
  top: 45px;
}

.navigation a:nth-child(2):hover ~ .animation {
  top: 110px;
  width: 100px;
}
.navigation a:nth-child(3):hover ~ .animation {
  top: 170px;
}
.navigation a:nth-child(4):hover ~ .animation {
  top: 235px;
}

@media screen and (min-width: 800px) {
  .header-logo {
    margin-left: 20px;
    width: 180px;
  }
  .navigation {
    background-color: initial;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    // font-size: initial;
    // text-align: initial;
    position: initial;
    top: initial;
    bottom: initial;
    transition: initial;
    z-index: initial;
    transform: initial;
  }

  .navigation .container-link {
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .toggle-container {
    position: initial;
    top: 0px;
    left: 0px;
    transform: translateX(0%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .animation {
    position: absolute;
    /* height: 100%; */
    height: 5px;
    /* top: 0; */
    // bottom: 0;
    left: 50%;
    transform: initial;
  }

  // .navigation {
  //   flex-direction: row;
  //   transform: translate(0, 0);
  //   position: initial;
  //   // top: 0px;
  // }

  .hamburger {
    display: none;
  }

  .navigation a.router-link-exact-active:nth-child(1) ~ .animation {
    left: 0px;
    top: 61px;
  }

  .navigation a.router-link-exact-active:nth-child(2) ~ .animation {
    left: 92px;
    top: 61px;
    width: 110px;
  }

  .navigation a.router-link-exact-active:nth-child(3) ~ .animation {
    left: 205px;

    width: 105px;
    top: 61px;
  }

  .navigation a.router-link-exact-active:nth-child(4) ~ .animation {
    left: 312px;
    top: 61px;
    width: 100px;
  }
  .navigation a:nth-child(1):hover ~ .animation {
    left: 0px;
    top: 61px;
    width: 90px;
  }

  .navigation a:nth-child(2):hover ~ .animation {
    left: 92px;
    top: 61px;
    width: 110px;
  }
  .navigation a:nth-child(3):hover ~ .animation {
    left: 205px;
    top: 61px;

    width: 105px;
  }
  .navigation a:nth-child(4):hover ~ .animation {
    left: 312px;
    top: 61px;
    width: 100px;
  }
}
@media screen and (min-width: 1300px){

  .navigation a.router-link-exact-active:nth-child(1) ~ .animation {
    left: 0px;
    top: 61px;
  }

  .navigation a.router-link-exact-active:nth-child(2) ~ .animation {
    left: 110px;
    top: 61px;
    width: 110px;
  }

  .navigation a.router-link-exact-active:nth-child(3) ~ .animation {
    left: 245px;

    width: 105px;
    top: 61px;
  }

  .navigation a.router-link-exact-active:nth-child(4) ~ .animation {
    left: 365px;
    top: 61px;
    width: 100px;
  }
  .navigation a:nth-child(1):hover ~ .animation {
    left: 0px;
    top: 61px;
    width: 90px;
  }

  .navigation a:nth-child(2):hover ~ .animation {
    left: 110px;
    top: 61px;
    width: 110px;
  }
  .navigation a:nth-child(3):hover ~ .animation {
    left: 245px;
    top: 61px;

    width: 105px;
  }
  .navigation a:nth-child(4):hover ~ .animation {
    left: 365px;
    top: 61px;
    width: 100px;
  }
}
</style>
