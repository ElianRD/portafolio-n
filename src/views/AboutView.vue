<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import TimelineExpirence from "@/components/home/TimelineExpirence.vue";
import SkillsMarquee from "@/components/skills/SkillsMarquee.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const education = [
  { key: "edu1", date: "2021 — 2024", place: "ITLA" },
  { key: "edu2", date: "09/2022 — 02/2023", place: "Alterna Academy" },
  { key: "edu3", date: "2022 — 2024", place: "Platzi" },
  { key: "edu4", date: "2021 — 2024", place: "freeCodeCamp" },
];
</script>

<template>
  <MainLayout>
    <!-- Intro -->
    <section class="about-intro">
      <p class="eyebrow">
        <span class="eyebrow__num">00</span>
        <span>{{ t("nav.about") }}</span>
        <span class="eyebrow__rule"></span>
      </p>

      <div class="about-intro__grid">
        <div class="about-intro__text">
          <h1 class="about-intro__title">{{ t("aboutPage.title") }}</h1>
          <p class="about-intro__p">{{ t("aboutPage.p1") }}</p>
          <p class="about-intro__p">{{ t("aboutPage.p2") }}</p>

          <h2 class="about-intro__focus-title">{{ t("aboutPage.focusTitle") }}</h2>
          <ul class="about-focus">
            <li class="about-focus__item">
              <i class="bx bx-code-alt"></i>{{ t("aboutPage.focus1") }}
            </li>
            <li class="about-focus__item">
              <i class="bx bx-server"></i>{{ t("aboutPage.focus2") }}
            </li>
            <li class="about-focus__item">
              <i class="bx bx-data"></i>{{ t("aboutPage.focus3") }}
            </li>
          </ul>
        </div>

        <div class="about-intro__media">
          <img
            class="about-photo"
            src="@/assets/img/profile.webp"
            alt="Foto de Elian Encarnacion"
            width="569"
            height="596"
          />
        </div>
      </div>
    </section>

    <!-- Experiencia (reutiliza la timeline de Home) -->
    <section class="hs">
      <TimelineExpirence />
    </section>

    <!-- Educación -->
    <section class="hs">
      <div class="edu">
        <p class="eyebrow">
          <span class="eyebrow__num">02</span>
          <span>{{ t("sections.education") }}</span>
          <span class="eyebrow__rule"></span>
        </p>
        <h2 class="section-h2">{{ t("sections.education") }}</h2>

        <div class="edu__list">
          <div class="edu__row" v-for="e in education" :key="e.key">
            <div class="edu__date">{{ e.date }}</div>
            <div class="edu__body">
              <div class="edu__head">
                <h3 class="edu__title">{{ t(`education.${e.key}.title`) }}</h3>
                <span class="edu__place">· {{ e.place }}</span>
              </div>
              <p class="edu__desc">{{ t(`education.${e.key}.desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologías -->
    <SkillsMarquee />
  </MainLayout>
</template>

<style scoped lang="scss">
.about-intro {
  width: 100%;
  padding: 70px $gutter 0;
}

/* Eyebrow compartido (secciones numeradas) */
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

.about-intro__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 30px;
  align-items: center;
}
.about-intro__title {
  font-family: "Outfit", sans-serif;
  font-weight: 800;
  font-size: 4.6rem;
  line-height: 1.02;
  letter-spacing: -2px;
  margin: 0 0 20px;
}
.about-intro__p {
  font-size: 1.6rem;
  line-height: 1.7;
  color: $muted;
  margin: 0 0 16px;
  max-width: 60ch;
}
.about-intro__focus-title {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 1.9rem;
  margin: 26px 0 14px;
}
.about-focus {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.about-focus__item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.55rem;
}
.about-focus__item i {
  color: $primary-color;
  font-size: 2rem;
  flex-shrink: 0;
}

.about-intro__media {
  display: flex;
  justify-content: center;
}
.about-photo {
  width: clamp(260px, 70vw, 380px);
  aspect-ratio: 360 / 440;
  height: auto;
  border-radius: 26px;
  object-fit: cover;
  object-position: center top;
  border: 1px solid rgba(47, 214, 196, 0.35);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}

.hs {
  width: 100%;
  padding: 90px 0 0;
}
.hs:last-of-type {
  padding-bottom: 20px;
}

/* Educación (mismo patrón que la timeline de experiencia) */
.edu {
  width: 100%;
  padding: 0 $gutter;
}
.edu__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 28px 0;
  border-top: 1px solid $hairline;
}
.edu__row:last-child {
  border-bottom: 1px solid $hairline;
}
.edu__date {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  color: $primary-color;
}
.edu__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
}
.edu__title {
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
}
.edu__place {
  font-size: 1.4rem;
  color: $muted;
}
.edu__desc {
  font-size: 1.45rem;
  line-height: 1.7;
  color: $muted;
  margin: 10px 0 0;
  max-width: 760px;
}

@media screen and (min-width: 760px) {
  .section-h2 {
    font-size: 4.2rem;
  }
  .edu__row {
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }
}

@media screen and (min-width: 900px) {
  .about-intro {
    padding-top: 90px;
  }
  .about-intro__grid {
    grid-template-columns: 1.3fr 1fr;
    gap: 64px;
  }
  .about-intro__title {
    font-size: 5.2rem;
  }
}
</style>
