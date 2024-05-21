<template>
  <div>
    <section class="firstHomepage">
      <Searchbar />
      <Carrusel />
    </section>
    <section class="secondHomepage flex flex-col gap-5 mb-20 justify-center items-center">
      <h3 class="text-[40px] text-customWhite">What's new</h3>
      <div v-if="movies" class="grid lg:grid-cols-4 gap-10 md:grid-cols-2">
        <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </section>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Carrusel from "../components/Carrusel.vue";
import Searchbar from "../components/Searchbar.vue";

export default {
  components: { Carrusel, Searchbar, Card },
  data() {
    return {
      movies: null
    };
  },
  mounted() {
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.movies = data.sort((a, b) => new Date(b.Released) - new Date(a.Released)).slice(0, 8);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
};
</script>

<style scoped>
</style>
