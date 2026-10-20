<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useToggleStore } from "@/stores/toggle";
const toggle = useToggleStore();
</script>

<template>
  <div class="app-shell" :class="{ dark: toggle.Theme }">
    <a class="skip-link" href="#main">Saltar al contenido</a>
    <Header />
    <main id="main" class="app-main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #07090f;
  transition: color 0.3s ease;
}
.app-shell.dark {
  color: #ffffff;
}

.app-main {
  flex: 1 1 auto;
}

.skip-link {
  position: absolute;
  left: 8px;
  top: -48px;
  z-index: 1000;
  padding: 8px 14px;
  border-radius: 6px;
  background: $primary-color;
  color: $backgound-black;
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 8px;
}
</style>

<style lang="scss">
/* Fondo base del tema aplicado al documento para cubrir toda la ventana
   (evita franjas blancas en pantallas anchas y el flash inicial). */
body {
  background-color: $backgound-black;
  transition: background-color 0.3s ease;
}
body:has(.app-shell:not(.dark)) {
  background-color: $backgound-white;
}
</style>
