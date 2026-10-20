<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <main-layout>
    <div class="section-work">
      <div class="work">
        <h3>{{ t("wip") }}</h3>
      </div>
    </div>
  </main-layout>
</template>

<style scoped lang="scss">
.section-work {
  width: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.work {
  text-align: center;
}
.work h3 {
  font-size: 4rem;
}
</style>
