<script setup>
import { useToggleStore } from "@/stores/toggle";

const toggle = useToggleStore();
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :class="{ 'is-dark': toggle.Theme }"
    role="switch"
    :aria-checked="toggle.Theme"
    aria-label="Cambiar tema"
    @click="toggle.toggleTheme"
  >
    <i class="bx bxs-sun icon icon-sun" aria-hidden="true"></i>
    <i class="bx bxs-moon icon icon-moon" aria-hidden="true"></i>
    <span class="knob"></span>
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
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

.theme-toggle.is-dark {
  background: #242424;
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  z-index: 1;
  transition: color 0.3s;
}
.icon-sun {
  left: 7px;
  color: #fff;
}
.icon-moon {
  right: 7px;
  color: #7e7e7e;
}
.theme-toggle.is-dark .icon-sun {
  color: #7e7e7e;
}
.theme-toggle.is-dark .icon-moon {
  color: #fff;
}

.knob {
  position: absolute;
  top: var(--pad);
  left: var(--pad);
  width: var(--knob);
  height: var(--knob);
  border-radius: 50%;
  background: linear-gradient(180deg, #ffcc89, #d8860b);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: left 0.3s, background 0.3s;
}
.theme-toggle.is-dark .knob {
  left: calc(var(--w) - var(--knob) - var(--pad));
  background: linear-gradient(180deg, #777, #3a3a3a);
}
.theme-toggle:active .knob {
  width: calc(var(--knob) + 8px);
}
.theme-toggle.is-dark:active .knob {
  left: calc(var(--w) - var(--knob) - var(--pad) - 8px);
}
</style>
