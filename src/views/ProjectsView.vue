<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { baseProjects } from "@/data/projects";
const { t } = useI18n();

const projects = computed(() =>
  baseProjects.map((p, i) => ({
    ...p,
    variant: i % 3,
    demoLabel: t("projectsSection.demo"),
    repoLabel: t("projectsSection.repo"),
  }))
);
</script>

<template>
  <MainLayout>
    <section class="projects-page">
      <p class="eyebrow">
        <span class="eyebrow__num">00</span>
        <span>{{ t("nav.projects") }}</span>
        <span class="eyebrow__rule"></span>
      </p>
      <h1 class="projects-page__title">{{ t("projectsPage.title") }}</h1>
      <p class="projects-page__note">{{ t("projectsPage.note") }}</p>

      <div class="pgrid">
        <article
          class="pcard"
          :class="`pcard--${p.variant}`"
          v-for="p in projects"
          :key="p.title"
        >
          <img
            v-if="p.image"
            :src="p.image"
            :alt="p.title"
            class="pcard__img"
            loading="lazy"
          />
          <div v-else class="pcard__ph">[ imagen del proyecto ]</div>
          <div class="pcard__overlay">
            <h3 class="pcard__title">{{ p.title }}</h3>
            <span class="pcard__tags">{{ p.tags }}</span>
          </div>
          <div class="pcard__hover">
            <a
              class="pbtn pbtn--demo"
              :href="p.demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bx-link-external"></i>{{ p.demoLabel }}
            </a>
            <a
              class="pbtn pbtn--repo"
              :href="p.repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-github"></i>{{ p.repoLabel }}
            </a>
          </div>
        </article>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped lang="scss">
.projects-page {
  width: 100%;
  padding: 70px $gutter 90px;
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

.projects-page__title {
  font-family: "Outfit", sans-serif;
  font-weight: 800;
  font-size: 4.6rem;
  line-height: 1.02;
  letter-spacing: -2px;
  margin: 18px 0 0;
}
.projects-page__note {
  font-size: 1.6rem;
  line-height: 1.6;
  color: $muted;
  margin: 16px 0 0;
  max-width: 60ch;
}

.pgrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 44px;
}

/* Tarjeta de proyecto (mismo lenguaje visual que el carrusel de Home). */
.pcard {
  position: relative;
  min-height: 300px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(233, 238, 240, 0.1);
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.25), rgba(11, 15, 21, 0.9));
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.pcard--0 {
  background: linear-gradient(135deg, rgba(47, 214, 196, 0.22), rgba(11, 15, 21, 0.92));
}
.pcard--1 {
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.25), rgba(11, 15, 21, 0.9));
}
.pcard--2 {
  background: linear-gradient(225deg, rgba(47, 214, 196, 0.18), rgba(11, 15, 21, 0.92));
}
.pcard:hover {
  transform: translateY(-4px);
  border-color: rgba(47, 214, 196, 0.4);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
}

.pcard__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pcard__ph {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  color: rgba(233, 238, 240, 0.45);
}

.pcard__overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px;
  background: linear-gradient(180deg, transparent, rgba(6, 8, 13, 0.9));
}
.pcard__title {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  margin: 0;
}
.pcard__tags {
  display: block;
  margin-top: 6px;
  font-size: 1.3rem;
  color: $primary-color;
}

.pcard__hover {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 20px;
  background: rgba(6, 8, 13, 0.74);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.pcard:hover .pcard__hover {
  opacity: 1;
}
.pbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 170px;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}
.pbtn i {
  font-size: 1.9rem;
}
.pbtn--demo {
  background: $primary-color;
  color: $backgound-black;
}
.pbtn--repo {
  border: 1px solid rgba(233, 238, 240, 0.3);
  color: #fff;
}
.pbtn:hover {
  transform: translateY(-2px);
}
.pbtn--repo:hover {
  background: #fff;
  color: $backgound-black;
}

@media (prefers-reduced-motion: reduce) {
  .pcard,
  .pcard__hover,
  .pbtn {
    transition: none;
  }
}

@media screen and (min-width: 900px) {
  .projects-page {
    padding-top: 90px;
  }
  .projects-page__title {
    font-size: 5.2rem;
  }
}
</style>
