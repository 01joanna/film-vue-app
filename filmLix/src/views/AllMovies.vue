<template>
  <div>
    <section>
      <Searchbar @search="updateSearchQuery" />
    </section>
    
    <section class="flex flex-col gap-5 mb-20 justify-center items-center mt-10 mx-10 ">
      <div>
        <h3 class="text-[40px] text-customWhite w-full pl-6 text-left">All movies</h3>
      </div>
      <!-- All Movies -->
      <section class="mb-6">
        <div class="grid lg:grid-cols-4 gap-10 md:grid-cols-2">
          <Card v-for="movie in filteredMovies" :key="movie.id" :movie="movie" /> 
        </div>
      </section>
    </section>
  </div>
</template>
    
<script>
import Searchbar from "../components/Searchbar.vue";
import Card from "../components/Card.vue";

export default {
  components: { Searchbar, Card },
  data() {
    return {
      allMovies: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredMovies() {
      return this.allMovies.filter(movie =>
        movie.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      try {
        const response = await fetch("http://localhost:3000/movies");
        this.allMovies = await response.json();
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    }
  }
};
</script>
<style scoped>
</style>

