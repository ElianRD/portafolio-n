<template>
  <article class="article2">
    <div class="foto-container">
      <img
        class="foto"
        src="@/assets/img/WhatsApp_Image_2023-10-23_at_10.40.27_PM-removebg.png"
        alt=""
      />
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
}
.foto {
  width: 85%;
  max-width: 500px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  border: 2px solid $primary-color;
  margin: 0 auto;
}

@media screen and (min-width: 400px) {
}
@media screen and (min-width: 800px) {
  .foto-container {
    padding-top: 0px;
  }
  .foto {
    width: 350px;
  }
}

@media screen and (min-width: 1024px) {
  .foto {
    width: 80%;
  }
}
</style>
