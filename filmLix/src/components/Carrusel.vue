<template>
  <Carousel :autoplay="2000" :wrap-around="true">
  
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" class="carousel__item mt-5">
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
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 1' },
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 2' },
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 3' },
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 4' },
        { src: 'src/assets/img/image 18.png', alt: 'Imagen 5' },
      ]
    }
  }
})
</script>

<style scoped>

</style>
