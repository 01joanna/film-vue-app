<script >
  import HeaderFeature from "../components/HeaderFeature.vue"
  import Card from "../components/Card.vue"
  import Carrusel from "../components/Carrusel.vue"
  import Searchbar from "../components/Searchbar.vue"
  import Footer from "../components/Footer.vue"

  export default {
  components: { HeaderFeature, Carrusel, Searchbar, Footer, Card },
  data() {
    return {
      movies: null
    };
  },
  mounted() {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        this.movies = data
          .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)) 
          .slice(0, 8); 
        console.log(this.movies);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};

</script>

<template>
    
    <body class="flex flex-col justify-center ">
      <section class="firstHomepage">
        <searchbar/>
        <carrusel/>
      </section>
      <section class="secondHomepage mx-44 flex flex-col gap-8 mb-20">
      <h3 class="text-[40px] text-customWhite">What's new</h3>
      <div v-if="movies" class="grid grid-cols-4 gap-4">
        <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </section>

    </body>
    <RouterView />
</template>

<style >

</style>
