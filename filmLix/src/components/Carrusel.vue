<template>
  <div class="relative">
    <!-- <h2 class="absolute text-white top-[25rem] left-44 z-50 text-[70px]">¡Bienvenido a Filmlix!</h2> -->
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="carousel__item">
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 1' },
        { src: 'src/assets/img/lord-of-rings.webp', alt: 'Imagen 2' },
        { src: 'src/assets/img/la-la-land.jpg', alt: 'Imagen 3' },
        { src: 'src/assets/img/Untitled-2.jpg', alt: 'Imagen 4' },
        { src: 'src/assets/img/viaje-al-paraiso.jpg', alt: 'Imagen 5' },
      ]
    }
  }
})
</script>

<style scoped>
.carousel__item {
  width: 80%;
  height: 500px; 
  object-fit: cover;
  margin: 2.5rem 2.5rem 0rem; 
  border-radius: 2rem;
  z-index: 40;
}
</style>
