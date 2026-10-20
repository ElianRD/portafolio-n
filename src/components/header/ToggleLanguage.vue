<script setup>
import { computed } from "vue";
import { useToggleStore } from "@/stores/toggle";

const toggle = useToggleStore();
const isEnglish = computed(() => toggle.Languaje);
</script>

<template>
  <button
    type="button"
    class="lang-toggle"
    :class="{ 'is-dark': toggle.Theme, 'is-en': isEnglish }"
    role="switch"
    :aria-checked="isEnglish"
    aria-label="Cambiar idioma"
    @click="toggle.toggleLanguaje"
  >
    <span class="tag tag-es" aria-hidden="true">ES</span>
    <span class="tag tag-en" aria-hidden="true">EN</span>
    <span class="knob">{{ isEnglish ? "EN" : "ES" }}</span>
  </button>
</template>

<style scoped lang="scss">
.lang-toggle {
  --w: 64px;
  --h: 30px;
  --knob: 24px;
  --pad: 3px;

  position: relative;
  width: var(--w);
  height: var(--h);
  padding: 0;
  border: none;
  border-radius: var(--h);
  background: #ebebeb;
  cursor: pointer;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4),
    inset 0 -1px 3px rgba(255, 255, 255, 0.4);
  transition: background 0.3s;
}
.lang-toggle.is-dark {
  background: #242424;
}

.tag {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: 700;
  color: #7e7e7e;
  z-index: 1;
  transition: opacity 0.3s;
}
.tag-es {
  right: 8px;
}
.tag-en {
  left: 8px;
  opacity: 0;
}
.lang-toggle.is-en .tag-es {
  opacity: 0;
}
.lang-toggle.is-en .tag-en {
  opacity: 1;
}

.knob {
  position: absolute;
  top: var(--pad);
  left: var(--pad);
  width: var(--knob);
  height: var(--knob);
  border-radius: 50%;
  background: $primary-color;
  color: #062b27;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: left 0.3s;
}
.lang-toggle.is-en .knob {
  left: calc(var(--w) - var(--knob) - var(--pad));
}
</style>
