<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import Article1 from "@/components/home/Article1.vue";
import Article2 from "@/components/home/Article2.vue";
import Timeline from "@/components/home/Timeline.vue";
import ProjectsSwiper from "@/components/ProjectsSwiper.vue";
import Time from "@/components/home/Time.vue";
import TimelineExpirence from "@/components/home/TimelineExpirence.vue";
</script>

<template>
  <MainLayout>
    <section class="home">
      <Article2 />
      <Article1 />
    </section>
    <section class="section section-experience">
      <TimelineExpirence />
    </section>
    <section class="section">
      <h2 class="section-title">Projects</h2>
      <ProjectsSwiper />
    </section>
    <section class="section section-education">
      <Time />
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
  // color: white;
  // background-color: $backgound-black;
}
.section-experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-education {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
