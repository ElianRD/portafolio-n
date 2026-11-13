<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 38,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(project, i) in projects" :key="project.title">
      <div class="pcard" :class="`pcard--${i % 3}`">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="pcard__img"
          loading="lazy"
        />
        <div v-else class="pcard__ph">[ imagen del proyecto ]</div>
        <div class="pcard__overlay">
          <h3 class="pcard__title">{{ project.title }}</h3>
          <span class="pcard__tags">{{ project.tags }}</span>
        </div>
        <div class="pcard__hover">
          <a
            class="pbtn pbtn--demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bx-link-external"></i>{{ project.demoLabel }}
          </a>
          <a
            class="pbtn pbtn--repo"
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-github"></i>{{ project.repoLabel }}
          </a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { baseProjects } from "@/data/projects";

const { t } = useI18n();
const modules = [EffectCoverflow, Pagination];

// Las etiquetas se incorporan a los datos (closure del v-for) porque dentro de
// <swiper-slide> el scope del setup (t) no es accesible directamente.
const projects = computed(() =>
  baseProjects.map((p) => ({
    ...p,
    demoLabel: t("projectsSection.demo"),
    repoLabel: t("projectsSection.repo"),
  }))
);
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 60px;
}

.swiper-slide {
  width: 340px;
  height: 340px;
}

.pcard {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(233, 238, 240, 0.1);
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.25), rgba(11, 15, 21, 0.9));
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

/* Overlay con botones al pasar el cursor. */
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
  min-width: 180px;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s ease, background-color 0.25s ease,
    color 0.25s ease;
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
  .pcard__hover,
  .pbtn {
    transition: none;
  }
}

/* La diapositiva central resalta con anillo teal y sombra. */
.swiper-slide-active .pcard {
  border-color: rgba(47, 214, 196, 0.4);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.6);
}

/* Paginación teal (coincide con el canvas). */
:deep(.swiper-pagination-bullet) {
  background: rgba(233, 238, 240, 0.25);
  opacity: 1;
}
:deep(.swiper-pagination-bullet-active) {
  background: $primary-color;
  width: 26px;
  border-radius: 7px;
}

@media screen and (min-width: 1024px) {
  .swiper-slide {
    width: 380px;
    height: 380px;
  }
}
</style>
