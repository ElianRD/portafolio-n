<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const jobs = [
  {
    key: "job1",
    date: "08/2024 — 10/2024",
    company: "Global Creative Unit",
    tags: ["Vue.js", "JavaScript", "Bootstrap"],
  },
  {
    key: "job2",
    date: "05/2023 — 11/2023",
    company: "Marcos Organizador de Negocios",
    tags: ["Odoo", "Python", "ERP"],
  },
  {
    key: "job3",
    date: "2021 — 2024",
    company: "ITLA",
    tags: ["Backend", "Frontend", "SQL"],
  },
];
</script>

<template>
  <div class="xp">
    <p class="eyebrow">
      <span class="eyebrow__num">01</span>
      <span>{{ t("sections.experience") }}</span>
      <span class="eyebrow__rule"></span>
    </p>
    <h2 class="section-h2">{{ t("sections.experience") }}</h2>

    <div class="xp__list">
      <div class="xp__row" v-for="job in jobs" :key="job.key">
        <div class="xp__date">{{ job.date }}</div>
        <div class="xp__body">
          <div class="xp__head">
            <h3 class="xp__role">{{ t(`experience.${job.key}.title`) }}</h3>
            <span class="xp__company">· {{ job.company }}</span>
          </div>
          <p class="xp__desc">{{ t(`experience.${job.key}.desc`) }}</p>
          <div class="xp__tags">
            <span
              class="xp__tag"
              v-for="(tag, i) in job.tags"
              :key="tag"
              :class="{ 'xp__tag--brand': i === 0 }"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xp {
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

.xp__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 28px 0;
  border-top: 1px solid $hairline;
}
.xp__row:last-child {
  border-bottom: 1px solid $hairline;
}
.xp__date {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  color: $primary-color;
}
.xp__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}
.xp__role {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
}
.xp__company {
  font-size: 1.4rem;
  color: $muted;
}
.xp__desc {
  font-size: 1.45rem;
  line-height: 1.7;
  color: $muted;
  margin: 10px 0 14px;
  max-width: 760px;
}
.xp__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.xp__tag {
  font-size: 1.2rem;
  background: rgba(233, 238, 240, 0.06);
  color: #cdd6da;
  padding: 5px 11px;
  border-radius: 7px;
}
.xp__tag--brand {
  background: rgba(47, 214, 196, 0.1);
  color: $primary-color;
}

@media screen and (min-width: 760px) {
  .section-h2 {
    font-size: 4.2rem;
  }
  .xp__row {
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }
}
</style>
