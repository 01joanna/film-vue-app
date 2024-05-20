<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="carousel__item">
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
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
        { src: 'src/assets/img/6562.jpg', alt: 'Imagen 1' },
        { src: 'src/assets/img/ai-generated-8746801_1280.jpg', alt: 'Imagen 2' },
        { src: 'src/assets/img/jake-hills-23LET4Hxj_U-unsplash 0.37.45.jpg', alt: 'Imagen 3' },
        { src: 'src/assets/img/ticket-2974645_1280.jpg', alt: 'Imagen 4' },
        { src: 'src/assets/img/myke-simon-atsUqIm3wxo-unsplash 0.37.45.jpg', alt: 'Imagen 5' },
      ]
    }
  }
})
</script>

<style scoped>
.carousel__item {
  width: 100%;
  height: 500px; 
  object-fit: cover;
  margin: 5rem 5rem 0rem; 
  border-radius: 5rem;
}
</style>
