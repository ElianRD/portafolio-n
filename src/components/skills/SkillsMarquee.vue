<script setup>
import { useI18n } from "vue-i18n";
import nestjsLogo from "@/assets/logos/nestjs-svgrepo-com.svg";
import dotnetLogo from "@/assets/logos/aspnet-svgrepo-com.svg";

const { t } = useI18n();

const skills = [
  { name: "Vue.js", icon: "bxl-vuejs", color: "#42b883" },
  { name: "React", icon: "bxl-react", color: "#61dafb" },
  { name: "JavaScript", icon: "bxl-javascript", color: "#f7df1e" },
  { name: "Python", icon: "bxl-python", color: "#3776ab" },
  { name: "HTML", icon: "bxl-html5", color: "#e34f26" },
  { name: "CSS / SCSS", icon: "bxl-css3", color: "#cc6699" },
  { name: "Git", icon: "bxl-git", color: "#f05032" },
  { name: "SQL", icon: "bxl-postgresql", color: "#336791" },
  { name: "Bootstrap", icon: "bxl-bootstrap", color: "#7952b3" },
  { name: "NestJS", img: nestjsLogo, color: "#e0234e" },
  { name: ".NET", img: dotnetLogo, color: "#512bd4" },
  { name: "Odoo / Python", icon: "bx-code-curly", color: "#a24689" },
];
</script>

<template>
  <section class="skills" aria-label="Tech stack">
    <p class="skills__label">{{ t("sections.skills") }}</p>
    <div class="skills__viewport">
      <div class="skills__track">
        <!-- Lista original -->
        <div
          class="skill-chip"
          v-for="skill in skills"
          :key="skill.name"
          :style="{ '--brand': skill.color }"
        >
          <img v-if="skill.img" :src="skill.img" alt="" class="skill-chip__logo" />
          <i v-else :class="['bx', skill.icon]" aria-hidden="true"></i>
          <span>{{ skill.name }}</span>
        </div>
        <!-- Copia duplicada para el bucle continuo sin cortes -->
        <div
          class="skill-chip"
          v-for="skill in skills"
          :key="'dup-' + skill.name"
          :style="{ '--brand': skill.color }"
          aria-hidden="true"
        >
          <img v-if="skill.img" :src="skill.img" alt="" class="skill-chip__logo" />
          <i v-else :class="['bx', skill.icon]" aria-hidden="true"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.skills__label {
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 32px;
}

.skills__viewport {
  overflow: hidden;
  /* Espacio vertical para que el chip agrandado (scale) no se recorte
     por el overflow hidden que necesita el marquee horizontal. */
  padding: 14px 0;
}

.skills__track {
  display: flex;
  gap: 48px;
  width: max-content;
  animation: marquee 20s linear infinite;
}

.skills__track:hover {
  animation-play-state: paused;
}

.skill-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #141822;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  padding: 10px 20px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.5rem;
  color: #9ea5b8;
  transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease,
    background 0.3s ease;
}

.skill-chip:hover {
  transform: scale(1.12);
  border-color: var(--brand, #{$primary-color});
  color: #fff;
  background: color-mix(in srgb, var(--brand, #{$primary-color}) 18%, transparent);
}

.skill-chip:hover i {
  color: var(--brand, #{$primary-color});
}

.skill-chip i {
  font-size: 1.8rem;
  color: $primary-color;
}

.skill-chip__logo {
  width: 1.8rem;
  height: 1.8rem;
  object-fit: contain;
  display: block;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .skills__track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 16px;
  }
}
</style>
