<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useToggleStore } from "@/stores/toggle";

const { t } = useI18n();
const toggle = useToggleStore();

const year = computed(() => new Date().getFullYear());

const socials = [
  { name: "GitHub", icon: "bxl-github", url: "https://github.com/ElianRD" },
  { name: "LinkedIn", icon: "bxl-linkedin-square", url: "https://www.linkedin.com/in/elian-encarnacionb268/" },
  { name: "Email", icon: "bx-envelope", url: "mailto:elianencarnacion03@gmail.com" },
];

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="footer" :class="{ 'footer-light': !toggle.Theme }">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-name">Elian<span class="dot">.</span>RD</span>
        <p class="footer-tagline">{{ t("footer.tagline") }}</p>
      </div>

      <nav class="footer-social" :aria-label="t('footer.social')">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.url"
          class="social-link"
          :aria-label="s.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="['bx', s.icon]" aria-hidden="true"></i>
        </a>
      </nav>
    </div>

    <div class="footer-bottom">
      <p class="footer-rights">© {{ year }} {{ t("footer.rights") }}</p>
      <button type="button" class="back-to-top" @click="scrollTop">
        <span>{{ t("footer.backToTop") }}</span>
        <i class="bx bx-up-arrow-alt" aria-hidden="true"></i>
      </button>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  margin-top: 40px;
  padding: 32px $gutter 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.4rem;
}
.footer-light {
  border-top-color: rgba(0, 0, 0, 0.1);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  max-width: none;
  margin: 0;
}

.footer-name {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.footer-name .dot {
  color: $primary-color;
}
.footer-tagline {
  margin-top: 6px;
  font-size: 1.4rem;
  opacity: 0.7;
}

.footer-social {
  display: flex;
  gap: 14px;
}
.social-link {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: inherit;
  font-size: 2rem;
  text-decoration: none;
  transition: transform 0.25s ease, background-color 0.25s ease,
    color 0.25s ease, border-color 0.25s ease;
}
.footer-light .social-link {
  border-color: rgba(0, 0, 0, 0.15);
}
.social-link:hover {
  transform: translateY(-3px);
  background-color: $primary-color;
  border-color: $primary-color;
  color: #062b27;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  max-width: none;
  margin: 28px 0 0;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.footer-light .footer-bottom {
  border-top-color: rgba(0, 0, 0, 0.06);
}
.footer-rights {
  font-size: 1.3rem;
  opacity: 0.65;
  text-align: center;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  background: transparent;
  color: inherit;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.footer-light .back-to-top {
  border-color: rgba(0, 0, 0, 0.15);
}
.back-to-top:hover {
  color: $primary-color;
  border-color: $primary-color;
}
.back-to-top i {
  font-size: 1.8rem;
}

@media screen and (min-width: 700px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  .footer-bottom {
    flex-direction: row;
  }
}
</style>
