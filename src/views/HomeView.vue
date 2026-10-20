<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import Article1 from "@/components/home/Article1.vue";
import Article2 from "@/components/home/Article2.vue";
import SkillsMarquee from "@/components/skills/SkillsMarquee.vue";
import ProjectsSwiper from "@/components/ProjectsSwiper.vue";
import Time from "@/components/home/Time.vue";
import TimelineExpirence from "@/components/home/TimelineExpirence.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <MainLayout>
    <section class="home">
      <Article2 />
      <Article1 />
    </section>

    <div class="hero-stats">
      <div class="hero-stats__item">
        <div class="hero-stats__num">ITLA</div>
        <div class="hero-stats__sub">{{ t("hero.stat1sub") }}</div>
      </div>
      <div class="hero-stats__divider"></div>
      <div class="hero-stats__item">
        <div class="hero-stats__num">Vue · React</div>
        <div class="hero-stats__sub">{{ t("hero.stat2sub") }}</div>
      </div>
      <div class="hero-stats__divider"></div>
      <div class="hero-stats__item">
        <div class="hero-stats__num">Python</div>
        <div class="hero-stats__sub">{{ t("hero.stat3sub") }}</div>
      </div>
    </div>

    <SkillsMarquee />

    <section class="hs">
      <TimelineExpirence />
    </section>

    <section class="hs">
      <div class="proj">
        <p class="eyebrow">
          <span class="eyebrow__num">02</span>
          <span>{{ t("sections.projects") }}</span>
          <span class="eyebrow__rule"></span>
        </p>
        <h2 class="section-h2">{{ t("projectsSection.heading") }}</h2>
        <p class="proj__note">{{ t("projectsSection.note") }}</p>
      </div>
      <ProjectsSwiper />
    </section>

    <section class="hs">
      <Time />
    </section>

    <section class="hs">
      <div class="contact">
        <p class="eyebrow">
          <span class="eyebrow__num">04</span>
          <span>{{ t("nav.contact") }}</span>
          <span class="eyebrow__rule"></span>
        </p>
        <div class="contact__row">
          <h2 class="contact__title" v-html="t('contactSection.title')"></h2>
          <RouterLink class="contact__btn" to="/contact">
            {{ t("contactSection.cta") }}
            <i class="bx bx-right-arrow-alt"></i>
          </RouterLink>
        </div>
        <p class="contact__mail">
          {{ t("contactSection.lead") }}
          <a href="mailto:elianencarnacion03@gmail.com">elianencarnacion03@gmail.com</a>
        </p>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  height: auto;
  flex-flow: row wrap;
  padding: 0 $gutter;
}

.hero-stats {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0 0;
  border-top: 1px solid $hairline;
  padding: 26px $gutter 0;
  gap: 0;
  flex-wrap: wrap;
}
.hero-stats__item {
  flex: 1 1 30%;
  padding: 8px 0;
}
.hero-stats__item:not(:first-child) {
  padding-left: 34px;
}
.hero-stats__num {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: inherit;
}
.hero-stats__sub {
  font-size: 1.3rem;
  color: $muted;
  margin-top: 4px;
}
.hero-stats__divider {
  width: 1px;
  height: 40px;
  background: rgba(233, 238, 240, 0.1);
}
@media screen and (max-width: 600px) {
  .hero-stats__divider {
    display: none;
  }
  .hero-stats__item {
    flex: 1 1 100%;
    padding-left: 0 !important;
    border-top: 1px solid $hairline;
  }
  .hero-stats__item:first-child {
    border-top: none;
  }
}
.hs {
  width: 100%;
  padding: 90px 0 0;
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
  margin: 18px 0 0;
}

.proj,
.contact {
  width: 100%;
  margin: 0;
  padding: 0 $gutter;
  text-align: left;
}
.proj__note {
  font-size: 1.4rem;
  color: $muted;
  margin: 12px 0 0;
}

.contact__row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-top: 20px;
}
.contact__title {
  font-family: "Outfit", sans-serif;
  font-weight: 800;
  font-size: 4.4rem;
  line-height: 1.02;
  letter-spacing: -1.5px;
  margin: 0;
}
.contact__mail {
  font-size: 1.6rem;
  color: $muted;
  margin: 22px 0 0;
}
.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: $primary-color;
  color: $backgound-black;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 15px 28px;
  border-radius: 12px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.3s;
}
.contact__btn:hover {
  transform: translateY(-3px);
}
.contact__btn i {
  font-size: 2rem;
}

@media screen and (min-width: 760px) {
  .section-h2 {
    font-size: 4.2rem;
  }
  .contact__title {
    font-size: 6rem;
  }
}

@media screen and (min-width: 370px) {
  .home-text-content h1 {
    font-size: 4rem;
  }
  .home-text-content h2 {
    font-size: 3.2rem;
    line-height: 4rem;
    /* color: #1abc9c; */
    position: absolute;
  }
}
@media screen and (min-width: 760px) {
}
@media screen and (min-width: 800px) {
  .article1 {
    order: 1; /* Cambia el orden del primer artículo */
  }

  .article2 {
    order: 2; /* Cambia el orden del segundo artículo */
  }
}
@media screen and (min-width: 910px) {
  .home-text-content h1 {
    font-size: 5rem;
  }
}
</style>
