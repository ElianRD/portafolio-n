<script setup>
import { watch } from "vue";
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";
import { useToggleStore } from "@/stores/toggle";

const { locale } = useI18n();
const toggle = useToggleStore();

// Languaje === true → inglés; false → español (por defecto).
watch(
  () => toggle.Languaje,
  (isEnglish) => {
    locale.value = isEnglish ? "en" : "es";
  },
  { immediate: true }
);
</script>

<template>
  <RouterView />
</template>
