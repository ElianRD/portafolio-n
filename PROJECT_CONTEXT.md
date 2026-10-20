# Descripción general
- ¿Qué hace el sitio? Es un portafolio personal en línea para "Elian RD" que muestra proyectos, experiencia, educación y habilidades, además de proporcionar una forma de contacto.
- ¿Cuál es su objetivo? Servir como una carta de presentación profesional, exhibir el trabajo realizado, detallar la trayectoria educativa y profesional, y facilitar el contacto con posibles clientes o empleadores.

# Tecnologías utilizadas
- Vue 3 (Framework frontend)
- Vite (Herramienta de construcción/Bundler)
- Vue Router (Enrutamiento para la Single Page Application)
- Pinia (Manejo de estado)
- Sass/SCSS (Preprocesador CSS para estilos)
- Swiper (Carrusel/Slider para la sección de proyectos)
- Boxicons (Iconografía)
- Google Fonts (Inter, Outfit)

# Estructura del proyecto
- `public/`: Archivos estáticos como el favicon.
- `src/`: Código fuente principal.
  - `assets/`: Recursos multimedia y estilos CSS básicos.
  - `components/`: Componentes reutilizables de Vue, organizados en subcarpetas (`home`, `header`, `skills`, `icons`, etc.).
  - `Layouts/`: Componentes de diseño que envuelven las vistas (ej. `MainLayout.vue`).
  - `router/`: Configuración de Vue Router (`index.js`).
  - `sass/`: Archivos SCSS globales y variables.
  - `stores/`: Archivos de estado de Pinia.
  - `views/`: Vistas/Páginas principales de la aplicación (`HomeView.vue`, `AboutView.vue`, `ContactView.vue`, `ProjectsView.vue`).

# Flujo de navegación
El sitio funciona como una Single Page Application (SPA). El punto de entrada es `index.html`, que carga `src/main.js`. 
`main.js` inicializa la aplicación Vue, Pinia y el Router, y monta el componente `App.vue`.
La navegación entre secciones (Home, About, Contact, Projects) se maneja del lado del cliente a través de Vue Router sin recargar la página.

# Componentes principales
- `MainLayout.vue`: Estructura principal que probablemente incluya el Header y el Footer para todas las vistas.
- Vistas (`HomeView.vue`, `AboutView.vue`, `ContactView.vue`, `ProjectsView.vue`): Representan cada página principal.
- Componentes de Home (`Article1.vue`, `Article2.vue`, `Timeline.vue`, `TimelineExpirence.vue`, `Time.vue`): Construyen la página de inicio.
- `ProjectsSwiper.vue`: Carrusel interactivo para mostrar proyectos.
- `Header.vue` / `Footer.vue`: Elementos de navegación e información al pie.
- `FormContact.vue`: Formulario para envío de mensajes en la sección de contacto.

# JavaScript
El proyecto utiliza JavaScript moderno (ES Modules) y la Composition API de Vue 3 (con `<script setup>`).
Se fomenta la separación de la lógica de enrutamiento (`router/`) y de estado (`stores/`).

# Estilos
Se utiliza SCSS para la estructuración de estilos.
Los estilos globales se encuentran en la carpeta `src/sass/` (ej. `main.scss`, `global.scss`, `_variables.scss`, `section.scss`).
Los estilos específicos de cada componente están encapsulados dentro de los mismos archivos `.vue` usando la etiqueta `<style scoped lang="scss">`.
Se usa una estrategia "mobile-first" o de diseño responsivo mediante `@media queries`. El tamaño base de la fuente (rem) se ajusta en `html` dependiendo del ancho de la pantalla.

# Recursos
- Fuentes de Google (Inter, Outfit).
- Iconos de Boxicons insertados vía CDN en `index.html`.
- Dependencias manejadas mediante `npm` (`package.json`).

# Convenciones del proyecto
- Uso de PascalCase para los nombres de componentes y archivos `.vue`.
- Uso de kebab-case para las clases CSS.
- Se utiliza la Composition API en los componentes de Vue (`<script setup>`).

# Archivos importantes
- `index.html`: Plantilla principal.
- `src/main.js`: Punto de entrada de la aplicación Vue.
- `vite.config.js`: Configuración del bundler.
- `package.json`: Dependencias y scripts del proyecto.
- `src/App.vue`: Componente raíz.

# Riesgos
- La gestión de estilos dispersos en archivos globales y componentes (scoped) puede causar conflictos si no se documentan bien las variables o clases globales.
- Actualizaciones de librerías como Swiper o Vue pueden tener breaking changes si no se bloquean las versiones o se migran correctamente.
