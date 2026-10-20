<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <article class="article2">
    <div class="foto-container">
      <div class="foto-wrap">
        <img
          class="foto"
          src="@/assets/img/profile.webp"
          alt="Foto de Elian Encarnacion"
          width="569"
          height="596"
        />
        <div class="badge">
          <span class="badge__num">3+ años</span>
          <span class="badge__label">{{ t("hero.badge") }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.article2 {
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
}
.foto-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding-top: 20px;
  animation: floaty 6s ease-in-out infinite;
}
.foto-wrap {
  position: relative;
}
.foto {
  width: clamp(260px, 60vw, 360px);
  aspect-ratio: 360 / 440;
  height: auto;
  border-radius: 26px;
  object-fit: cover;
  object-position: center top;
  border: 1px solid rgba(47, 214, 196, 0.35);
  display: block;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}
.badge {
  position: absolute;
  bottom: -22px;
  left: -18px;
  background: rgba(13, 17, 23, 0.9);
  border: 1px solid rgba(233, 238, 240, 0.12);
  border-radius: 14px;
  padding: 14px 18px;
  backdrop-filter: blur(8px);
}
.badge__num {
  display: block;
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  color: $primary-color;
}
.badge__label {
  display: block;
  font-size: 1.2rem;
  color: $muted;
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@media screen and (min-width: 800px) {
  .foto-container {
    padding-top: 0;
  }
  .foto {
    width: clamp(300px, 32vw, 360px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .foto-container {
    animation: none;
  }
}
</style>
