<script setup>
import { ref, computed } from "vue";
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
const isEnglish = ref(false);

const language = computed(() => (isEnglish.value ? "ENG" : "ESP"));
const flagUrl = computed(() =>
  isEnglish.value
    ? "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
);
</script>

<template>
  <div class="container">
    <label
      class="toggle-container"
      :class="{ 'theme-active': toggle.Theme }"
      for="toggle"
    >
      <input
        type="checkbox"
        id="toggle"
        v-model="isEnglish"
        aria-label="Cambiar idioma"
        @click="toggle.toggleLanguaje"
      />
      <div class="toggle-slider" aria-hidden="true"></div>
      <div
        class="flag"
        :style="{ backgroundImage: `url(${flagUrl})` }"
        aria-hidden="true"
      ></div>
      <div class="label">{{ language }}</div>
    </label>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}
.toggle-container {
  --toggle-width: 120px;
  --toggle-height: 50px;
  --slider-size: 45px;
  --slider-margin: 2.5px;
  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);
  border-radius: calc(var(--toggle-height) / 2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #ebebeb;
}
.theme-active {
  background-color: #242424;
  box-shadow: inset 0px 1.171875px 3.515625px rgba(0, 0, 0, 0.4),
    inset 0px -1.171875px 3.515625px rgba(255, 255, 255, 0.4);
}
.toggle-container input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-slider {
  position: absolute;
  top: var(--slider-margin);
  left: var(--slider-margin);
  width: var(--slider-size);
  height: var(--slider-size);
  border-radius: 50%;
  background-color: #c7c7c7;
  transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out;
}
.toggle-container input:checked + .toggle-slider {
  transform: translateX(
    calc(var(--toggle-width) - var(--slider-size) - (2 * var(--slider-margin)))
  );
}
.flag {
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  width: 37.5px;
  height: 37.5px;
  border-radius: 50%;
  background-image: url("https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png");
  background-size: cover;
  transition: background-image 0.4s ease-in-out;
}
.label {
  position: absolute;
  top: 48%;
  right: 7.5px;
  transform: translateY(-50%);
  font-size: 25px;
  font-weight: bold;
  transition: color 0.4s ease-in-out;
}
.toggle-container input:checked ~ .label {
  transform: translateX(-50.5px);
  top: 10.5px;
}
.toggle-container input:checked ~ .flag {
  left: 76px;
}
@media screen and (min-width: 800px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
  }
  .toggle-container {
    --toggle-width: 65px;
    --toggle-height: 25px;
    --slider-size: 22.5px;
    --slider-margin: 1.25px;
  }
  .flag {
    width: 18.75px;
    height: 18.75px;
    left: 3px;
  }
  .label {
    font-size: 12.5px;
  }
  .toggle-container input:checked ~ .label {
    transform: translateX(-22.25px);
    top: 5.25px;
  }
  .toggle-container input:checked ~ .flag {
    left: 43px;
  }
}
</style>
