<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const edus = [
  { key: "edu1", date: "2021 — 2024", place: "Instituto Tecnológico de las Américas (ITLA)" },
  { key: "edu2", date: "09/2022 — 02/2023", place: "Alterna Academy" },
  { key: "edu3", date: "2022 — 2024", place: "Platzi" },
  { key: "edu4", date: "2021 — 2024", place: "freeCodeCamp" },
];
</script>

<template>
  <div class="edu">
    <p class="eyebrow">
      <span class="eyebrow__num">03</span>
      <span>{{ t("sections.education") }}</span>
      <span class="eyebrow__rule"></span>
    </p>
    <h2 class="section-h2">{{ t("sections.education") }}</h2>

    <div class="edu__grid">
      <div class="edu__card" v-for="edu in edus" :key="edu.key">
        <div class="edu__date">{{ edu.date }}</div>
        <h3 class="edu__title">{{ t(`education.${edu.key}.title`) }}</h3>
        <div class="edu__place">{{ edu.place }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edu {
  width: 100%;
  margin: 0;
  padding: 0 $gutter;
  text-align: left;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: $primary-color;
  margin: 0;
}
.eyebrow__num {
  color: #5c666b;
}
.eyebrow__rule {
  flex: 1;
  height: 1px;
  background: $hairline;
}

.section-h2 {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 3.4rem;
  letter-spacing: -1px;
  margin: 18px 0 40px;
}

.edu__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.edu__card {
  border: 1px solid rgba(233, 238, 240, 0.08);
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.3s, transform 0.3s;
}
.edu__card:hover {
  border-color: rgba(47, 214, 196, 0.35);
  transform: translateY(-3px);
}
.edu__date {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  color: $primary-color;
  margin-bottom: 10px;
}
.edu__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 1.9rem;
  margin: 0 0 6px;
}
.edu__place {
  font-size: 1.4rem;
  color: $muted;
}

@media screen and (min-width: 760px) {
  .section-h2 {
    font-size: 4.2rem;
  }
  .edu__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
