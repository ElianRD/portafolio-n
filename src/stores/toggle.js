import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", () => {
  const Theme = ref(JSON.parse(localStorage.getItem("Theme")) || false);
  const Languaje = ref(JSON.parse(localStorage.getItem("Languaje")) || false);
  const HamburgueBotton = ref(false);

  function toggleTheme() {
    Theme.value = !Theme.value;
  }
  function toggleLanguaje() {
    Languaje.value = !Languaje.value;
  }
  function toggleHamburgueBotton() {
    HamburgueBotton.value = !HamburgueBotton.value;
  }

  watch(Theme, (newValue) => {
    localStorage.setItem("Theme", JSON.stringify(newValue));
  });

  watch(Languaje, (newValue) => {
    localStorage.setItem("Languaje", JSON.stringify(newValue));
  });

  return {
    Languaje,
    Theme,
    toggleLanguaje,
    toggleHamburgueBotton,
    HamburgueBotton,
    toggleTheme,
  };
});
