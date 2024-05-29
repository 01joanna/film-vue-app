<template>
  <div>
    <section class="firstHomepage">
      <Searchbar />
    </section>

    
    <section class="flex flex-col gap-5 mt-10 mb-20 justify-center px-28 items-center ">
      <h3 class="text-[40px] text-customWhite w-full md:pl-6 text-left">Genres</h3>

      <ul class="md:flex gap-2 px-10 justify-center items-center">
        <li class="genresMapLi"><a href="#comedyId" >Comedy</a></li>
        <li class="genresMapLi"><a href="#actionId" >Action</a></li>
        <li class="genresMapLi"><a href="#fantasyId" >Fantasy</a></li>
        <li class="genresMapLi"><a href="#thrillerId" >Thriller</a></li>
        <li class="genresMapLi"><a href="#biographyId" >Biography</a></li>
        <li class="genresMapLi"><a href="#dramaId" >Drama</a></li>
        <li class="genresMapLi"><a href="#documentaryId" >Documentary</a></li>
        <li class="genresMapLi"><a href="#animationId" >Animation</a></li>
        <li class="genresMapLi"><a href="#familyId">Family</a></li>
      </ul>

      <!-- Comedy Section -->
      <section class="mb-6" id="comedyId">
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
      <section class="mb-6" id="actionId">
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
      <section class="mb-6" id="fantasyId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Fantasy</h4>
          <button v-if="this.fantasyMoviesMore == true" class=" pb-0  h-1" @click="loadMore('fantasy')">more</button>
          <button v-if="this.fantasyMoviesMore == false" class=" pb-0 h-1" @click="loadLess('fantasy')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in fantasyMovies.slice(0, fantasyCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>

      <!-- Thriller Section -->
      <section class="mb-6" id="thrillerId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Thriller</h4>
          <button v-if="this.thrillerMoviesMore == true" class=" pb-0  h-1" @click="loadMore('thriller')">more</button>
          <button v-if="this.thrillerMoviesMore == false" class=" pb-0 h-1" @click="loadLess('thriller')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in thrillerMovies.slice(0, thrillerCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>

      <!-- Biography Section -->
      <section class="mb-6" id="biographyId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Biography</h4>
          <button v-if="this.biographyMoviesMore == true" class=" pb-0  h-1" @click="loadMore('biography')">more</button>
          <button v-if="this.biographyMoviesMore == false" class=" pb-0 h-1" @click="loadLess('biography')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in biographyMovies.slice(0, biographyCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>  
      
      <!-- Drama Section -->
      <section class="mb-6" id="dramaId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Drama</h4>
          <button v-if="this.dramaMoviesMore == true" class=" pb-0  h-1" @click="loadMore('drama')">more</button>
          <button v-if="this.dramaMoviesMore == false" class=" pb-0 h-1" @click="loadLess('drama')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in dramaMovies.slice(0, dramaCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>  

      <!-- Documentary Section -->
      <section class="mb-6" id="documentaryId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Documentary</h4>
          <button v-if="this.documentaryMoviesMore == true" class=" pb-0  h-1" @click="loadMore('documentary')">more</button>
          <button v-if="this.documentaryMoviesMore == false" class=" pb-0 h-1" @click="loadLess('documentary')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in documentaryMovies.slice(0, documentaryCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>  

      <!-- Animation Section -->
      <section class="mb-6" id="animationId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Animation</h4>
          <button v-if="this.animationMoviesMore == true" class=" pb-0  h-1" @click="loadMore('animation')">more</button>
          <button v-if="this.animationMoviesMore == false" class=" pb-0 h-1" @click="loadLess('animation')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in animationMovies.slice(0, animationCount)" :key="movie.id" :movie="movie" />
        </div>
      </section>  

      <!-- Family Section -->
      <section class="mb-6" id="familyId">
        <div class="titleAndButtonsDiv"> 
          <h4 class="listOrGenreTitle">Family</h4>
          <button v-if="this.familyMoviesMore == true" class=" pb-0  h-1" @click="loadMore('family')">more</button>
          <button v-if="this.familyMoviesMore == false" class=" pb-0 h-1" @click="loadLess('family')">less</button>
        </div>

        <div class="cardsDiv">
          <Card v-for="movie in familyMovies.slice(0, familyCount)" :key="movie.id" :movie="movie" />
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
      thrillerMovies: [],
      biographyMovies: [],
      dramaMovies: [],
      documentaryMovies: [],
      animationMovies: [],
      familyMovies: [],

      // Amount of films displayed
      comedyCount: 4,
      actionCount: 4,
      fantasyCount: 4,
      thrillerCount: 4,
      biographyCount: 4,
      dramaCount: 4,
      documentaryCount: 4,
      animationCount: 4,
      familyCount: 4,

      // More/Less buttons checker
      comedyMoviesMore: true,
      actionMoviesMore: true,
      fantasyMoviesMore: true,
      thrillerMoviesMore: true,
      biographyMoviesMore: true,
      dramaMoviesMore: true,
      documentaryMoviesMore: true,
      animationMoviesMore: true,
      familyMoviesMore: true,
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
        this.thrillerMovies = data.filter((movie) =>
          movie.Genre.includes("Thriller")
        );
        this.biographyMovies = data.filter((movie) =>
          movie.Genre.includes("Biography")
        );
        this.dramaMovies = data.filter((movie) =>
          movie.Genre.includes("Drama")
        );
        this.documentaryMovies = data.filter((movie) =>
          movie.Genre.includes("Documentary")
        );
        this.animationMovies = data.filter((movie) =>
          movie.Genre.includes("Animation")
        );
        this.familyMovies = data.filter((movie) =>
          movie.Genre.includes("Family")
        );

        
        /* it shuffles the films in arrays */
        this.comedyMovies.sort(() => 0.5 - Math.random())
        this.actionMovies.sort(() => 0.5 - Math.random())
        this.fantasyMovies.sort(() => 0.5 - Math.random())
        this.thrillerMovies.sort(() => 0.5 - Math.random())
        this.biographyMovies.sort(() => 0.5 - Math.random())
        this.dramaMovies.sort(() => 0.5 - Math.random())
        this.documentaryMovies.sort(() => 0.5 - Math.random())
        this.animationMovies.sort(() => 0.5 - Math.random())
        this.familyMovies.sort(() => 0.5 - Math.random())
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
      }else if(genre === "thriller"){
        this.thrillerCount+=4;
        this.thrillerMoviesMore = false;
      }else if(genre ==="biography"){
        this.biographyCount+=4;
        this.biographyMoviesMore = false;
      }else if(genre ==="drama"){
        this.dramaCount+=4;
        this.dramaMoviesMore = false;
      }else if(genre ==="documentary"){
        this.documentaryCount+=4;
        this.documentaryMoviesMore = false;
      }else if(genre ==="animation"){
        this.animationCount+=4;
        this.animationMoviesMore = false;
      }else if(genre ==="family"){
        this.familyCount+=4;
        this.familyMoviesMore = false;
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
      }else if(genre === 'thriller'){
        this.thrillerCount-=4;
        this.thrillerMoviesMore = true;
      }else if(genre=== 'biography'){
        this.biographyCount-=4;
        this.biographyMoviesMore = true;
      }else if(genre=== 'drama'){
        this.dramaCount-=4;
        this.dramaMoviesMore = true;
      }else if(genre=== 'documentary'){
        this.documentaryCount-=4;
        this.documentaryMoviesMore = true;
      }else if(genre=== 'animation'){
        this.animationCount-=4;
        this.animationMoviesMore = true;
      }else if(genre=== 'family'){
        this.familyCount-=4;
        this.familyMoviesMore = true;
      }
    }
  },
};
</script>

<style scoped></style>
