<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <article class="article1 home-text">
    <div class="presentacion home-text-content">
      <p class="eyebrow"><span class="eyebrow__line"></span>{{ t("hero.eyebrow") }}</p>
      <h1 class="name">Elian<br />Encarnación</h1>
      <p class="bio">{{ t("hero.bioShort") }}</p>

      <div class="btn-cv">
        <a class="btn btn--primary" download="Elian-CV" href="/ElianCV.pdf">
          <i class="bx bxs-file-pdf"></i>{{ t("hero.resume") }}
        </a>
        <RouterLink class="btn btn--ghost" to="/contact">
          {{ t("hero.contact") }}<i class="bx bx-phone-call"></i>
        </RouterLink>
      </div>

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
  </article>
</template>

<style scoped lang="scss">
.article1 {
  margin: 0 auto;
  height: auto;
  flex: 1 1 400px;
  padding-bottom: 50px;
}
.home-text-content {
  width: 100%;
  margin: 40px 0;
  text-align: center;
}

.eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: "JetBrains Mono", "Courier New", monospace;
  font-size: 1.3rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: $primary-color;
  margin-bottom: 22px;
}
.eyebrow__line {
  width: 34px;
  height: 1px;
  background: $primary-color;
  display: inline-block;
}

.name {
  font-family: "Outfit", sans-serif;
  font-weight: 800;
  font-size: 5.2rem;
  line-height: 0.98;
  letter-spacing: -1.5px;
  color: inherit;
  margin: 0;
}

.bio {
  max-width: 460px;
  margin: 26px auto 0;
  font-size: 1.6rem;
  line-height: 1.7;
  color: $muted;
}

.btn-cv {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 36px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 14px 26px;
  border-radius: 12px;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.4s;
}
.btn i {
  font-size: 2rem;
}
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: -1;
  transition: width 0.5s;
}
.btn:hover::before {
  width: 100%;
}
.btn--primary {
  background: $primary-color;
  color: $backgound-black;
  /* Borde teal: mantiene la forma del botón visible cuando el relleno oscuro
     coincide con el fondo de la página en modo oscuro (espejo del ghost). */
  border: 1px solid $primary-color;
}
/* Mismo relleno deslizante que el ghost, con los colores invertidos:
   el ghost se llena de teal (texto oscuro); el primario se llena de oscuro
   (texto teal). */
.btn--primary::before {
  background: $backgound-black;
}
.btn--primary:hover {
  color: $primary-color;
}
/* En modo claro el relleno es claro (como el fondo) con texto teal legible:
   el botón queda "hueco" con texto y borde teal. */
.app-shell:not(.dark) .btn--primary::before {
  background: $backgound-white;
}
.app-shell:not(.dark) .btn--primary:hover {
  color: $primary-dark;
}
.btn--ghost {
  border: 1px solid rgba(233, 238, 240, 0.18);
  color: $ink;
  font-weight: 600;
}
.btn--ghost i {
  color: $primary-color;
}
.btn--ghost::before {
  background: $primary-color;
}
.btn--ghost:hover {
  color: $backgound-black;
}
.btn--ghost:hover i {
  color: $backgound-black;
}

.redes {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin: 40px auto 0;
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

/* Modo claro: mejorar contraste del botón ghost y los íconos sociales
   (los tokens $ink/$muted y los bordes casi-blancos son solo para fondo oscuro). */
.app-shell:not(.dark) .btn--ghost {
  color: $backgound-black;
  border-color: rgba(7, 9, 15, 0.22);
}
.app-shell:not(.dark) .btn--ghost i {
  color: $primary-dark;
}
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

@media screen and (min-width: 800px) {
  .home-text-content {
    text-align: start;
  }
  .eyebrow {
    justify-content: flex-start;
  }
  .name {
    font-size: 6.4rem;
  }
  .bio {
    margin-left: 0;
  }
  .btn-cv {
    justify-content: flex-start;
  }
  .redes {
    justify-content: flex-start;
    margin-left: 0;
  }
}

@media screen and (min-width: 1024px) {
  .name {
    font-size: 7.5rem;
  }
  .bio {
    font-size: 1.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn::before,
  .redes a::before {
    transition: none;
  }
}
</style>
