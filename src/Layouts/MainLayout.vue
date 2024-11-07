<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
</script>

<template>
  <div class="body" :class="{ dark: toggle.Theme }">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>
<style  lang="scss">

.dark {
  color: white;
  background-color: black;
}
</style>
