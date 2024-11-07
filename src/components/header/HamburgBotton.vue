<script setup>
import { ref } from "vue";
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
</script>

<template>
  <div
    class="hamburger hamburger--spin"
    @click="toggle.toggleHamburgueBotton"
    :class="{
      'is-active': toggle.HamburgueBotton,
      'theme-active': !toggle.Theme,
    }"
  >
    <div class="hamburger-box">
      <div
        class="hamburger-inner"
        :class="{ 'theme-active': !toggle.Theme }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/hamburger.css";

.hamburger.is-active .theme-active,
.hamburger.is-active .theme-active::before,
.hamburger.is-active .theme-active::after {
  background-color: #3a3a3a;
}
.theme-active,
.theme-active::before,
.theme-active::after {
  background-color: #3a3a3a;
}

@media screen and (min-width: 800px) {
  .hamburger {
    display: none;
  }
}
</style>
