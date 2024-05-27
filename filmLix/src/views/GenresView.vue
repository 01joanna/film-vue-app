<template>
  <div>
    <section class="firstHomepage">
      <Searchbar />
    </section>

    
    <section class="flex flex-col gap-5 mt-10 mb-20 justify-center px-28 items-center ">
      <h3 class="text-[40px] text-customWhite w-full pl-6 text-left">Genres</h3>

      <!-- Comedy Section -->
      <section class="mb-6">
        <div class="titleAndButtonsDiv">
          <h4 class="listOrGenreTitle">Comedy</h4>
          <button v-if="this.comedyMoviesMore == true" class=" pb-0  h-1" @click="loadMore('comedy')">more</button>
          <button v-if="this.comedyMoviesMore == false" class=" pb-0 h-1" @click="loadLess('comedy')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in comedyMovies.slice(0, comedyCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>
  
      <!-- Action Section -->
      <section class="mb-6">
        <div class="titleAndButtonsDiv">
          <h4 class="listOrGenreTitle">Action</h4>
          <button v-if="this.actionMoviesMore == true" class=" pb-0  h-1" @click="loadMore('action')">more</button>
          <button v-if="this.actionMoviesMore == false" class=" pb-0 h-1" @click="loadLess('action')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in actionMovies.slice(0, actionCount)" :key="movie.id" :movie="movie"/>
        </div>
      </section>

      <!-- Fantasy Section -->
      <section class="mb-6">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Fantasy</h4>
          <button v-if="this.fantasyMoviesMore == true" class=" pb-0  h-1" @click="loadMore('fantasy')">more</button>
          <button v-if="this.fantasyMoviesMore == false" class=" pb-0 h-1" @click="loadLess('fantasy')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in fantasyMovies.slice(0, fantasyCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>
      
    </section>
    
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Searchbar from "../components/Searchbar.vue";

export default {
  components: { Searchbar, Card },
  data() {
    return {
      // Genres data
      comedyMovies: [],
      actionMovies: [],
      fantasyMovies: [],

      // Amount of films displayed
      comedyCount: 4,
      actionCount: 4,
      fantasyCount: 4,

      // More/Less buttons checker
      comedyMoviesMore: true,
      actionMoviesMore: true,
      fantasyMoviesMore: true,
    };
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      try {
        const response = await fetch("http://localhost:3000/movies");
        const data = await response.json();

        this.comedyMovies = data.filter((movie) =>
          movie.Genre.includes("Comedy")
        );
        this.actionMovies = data.filter((movie) =>
          movie.Genre.includes("Action")
        );
        this.fantasyMovies = data.filter((movie) =>
          movie.Genre.includes("Fantasy")
        );

        console.log("Comedy Movies:", this.comedyMovies);
        console.log("Action Movies:", this.actionMovies);
        console.log("Fantasy Movies:", this.fantasyMovies);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    },
    loadMore(genre) {
      if (genre === "comedy") {
        this.comedyCount += 4;
        this.comedyMoviesMore = false;
      } else if (genre === "action") {
        this.actionCount += 4;
        this.actionMoviesMore = false;
      } else if (genre === "fantasy") {
        this.fantasyCount += 4;
        this.fantasyMoviesMore = false;
      }
    },
    loadLess(genre){
      if(genre === "comedy"){
        this.comedyCount -= 4;
        this.comedyMoviesMore = true;
      } else if(genre === "action"){
        this.actionCount -= 4;
        this.actionMoviesMore = true;
      } else if(genre === "fantasy"){
        this.fantasyCount -= 4;
        this.fantasyMoviesMore = true;
      }
    }
  },
};
</script>

<style scoped></style>
