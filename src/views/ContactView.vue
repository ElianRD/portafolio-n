<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import FormContact from "@/components/FormContact.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <MainLayout>
    <section class="contact-page">
      <p class="eyebrow">
        <span class="eyebrow__num">05</span>
        <span>{{ t("nav.contact") }}</span>
        <span class="eyebrow__rule"></span>
      </p>

      <div class="contact-page__grid">
        <div class="contact-page__intro">
          <h1 class="contact-page__title">{{ t("contactPage.title") }}</h1>
          <p class="contact-page__lead">{{ t("contactPage.lead") }}</p>

          <ul class="contact-info">
            <li class="contact-info__item">
              <span class="contact-info__label">{{ t("contactPage.emailLabel") }}</span>
              <span class="contact-info__value">
                <a href="mailto:elianencarnacion03@gmail.com">
                  elianencarnacion03@gmail.com
                </a>
              </span>
            </li>
            <li class="contact-info__item">
              <span class="contact-info__label">{{ t("contactPage.locationLabel") }}</span>
              <span class="contact-info__value">{{ t("contactPage.location") }}</span>
            </li>
            <li class="contact-info__item">
              <span class="contact-info__label">{{ t("contactPage.availabilityLabel") }}</span>
              <span class="contact-info__value contact-info__value--ok">
                <span class="dot"></span>{{ t("contactPage.availability") }}
              </span>
            </li>
          </ul>

          <div class="contact-social">
            <span class="contact-social__label">{{ t("contactPage.socialLabel") }}</span>
            <div class="redes">
              <a
                href="https://www.linkedin.com/in/elian-encarnacionb268/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                ><i class="bx bxl-linkedin-square"></i
              ></a>
              <a href="mailto:elianencarnacion03@gmail.com" aria-label="Enviar correo"
                ><i class="bx bxl-gmail"></i
              ></a>
              <a
                href="https://github.com/ElianRD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                ><i class="bx bxl-github"></i
              ></a>
            </div>
          </div>
        </div>

        <FormContact />
      </div>
    </section>
  </MainLayout>
</template>

<style scoped lang="scss">
.contact-page {
  width: 100%;
  padding: 70px $gutter 90px;
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

.contact-page__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 30px;
}

.contact-page__title {
  font-family: "Outfit", sans-serif;
  font-weight: 800;
  font-size: 5rem;
  line-height: 1.02;
  letter-spacing: -2px;
  margin: 0;
}
.contact-page__lead {
  font-size: 1.7rem;
  line-height: 1.6;
  color: $muted;
  margin: 22px 0 0;
  max-width: 48ch;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 36px 0 0;
}
.contact-info__item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px 0;
  border-top: 1px solid $hairline;
}
.contact-info__item:last-child {
  border-bottom: 1px solid $hairline;
}
.contact-info__label {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $primary-color;
}
.contact-info__value {
  font-size: 1.7rem;
  color: inherit;
}
.contact-info__value a {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s;
}
.contact-info__value a:hover {
  color: $primary-color;
}
.contact-info__value--ok {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: $primary-color;
  box-shadow: 0 0 0 4px rgba(47, 214, 196, 0.18);
}

.contact-social {
  margin-top: 34px;
}
.contact-social__label {
  display: block;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $muted;
  margin-bottom: 14px;
}
.redes {
  display: flex;
  gap: 14px;
}
.redes a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  color: $muted;
  font-size: 2.2rem;
  border: 1px solid rgba(233, 238, 240, 0.14);
  border-radius: 50%;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s, border-color 0.4s;
}
.redes a::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateY(100%);
  transition: transform 0.4s;
  z-index: -1;
}
.redes a:hover::before {
  transform: translateY(0);
}
.redes a:nth-child(1):hover {
  color: #0a66c2;
  border-color: #0a66c2;
}
.redes a:nth-child(2):hover {
  color: #ea4335;
  border-color: #ea4335;
}
.redes a:nth-child(3):hover {
  color: #111;
  border-color: #fff;
}

/* Modo claro: contraste de íconos sociales (tokens pensados para fondo oscuro). */
.app-shell:not(.dark) .redes a {
  color: #52606d;
  border-color: rgba(7, 9, 15, 0.18);
}
/* Modo claro: el relleno blanco es invisible sobre fondo blanco, así que no se
   notaba el hover. Se rellena con el color de cada marca y el ícono va en blanco. */
.app-shell:not(.dark) .redes a:hover {
  color: #fff;
}
.app-shell:not(.dark) .redes a:nth-child(1)::before {
  background: #0a66c2;
}
.app-shell:not(.dark) .redes a:nth-child(2)::before {
  background: #ea4335;
}
.app-shell:not(.dark) .redes a:nth-child(3)::before {
  background: #111;
}
.app-shell:not(.dark) .redes a:nth-child(1):hover {
  border-color: #0a66c2;
}
.app-shell:not(.dark) .redes a:nth-child(2):hover {
  border-color: #ea4335;
}
.app-shell:not(.dark) .redes a:nth-child(3):hover {
  border-color: #111;
}

@media screen and (min-width: 900px) {
  .contact-page {
    padding: 90px $gutter 110px;
  }
  .contact-page__grid {
    grid-template-columns: 1.05fr 1fr;
    gap: 70px;
    align-items: start;
  }
}
</style>
