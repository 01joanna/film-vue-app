<template>
  <div>
    <section class="firstHomepage">
      <Searchbar />
    </section>
    <h3 class="text-[40px] gap-5 mb-10 mt-5 justify-center text-customWhite">
      Genres
    </h3>

    <!-- Comedy Section -->
    <div class="flex justify-around mb-5">
      <h4 class="text-[28px] text-customWhite">Comedy</h4>
      <h4
        class="text-[28px] text-customWhite cursor-pointer"
        @click="loadMore('comedy')"
      >
        More
      </h4>
    </div>
    <section
      class="secondHomepage flex flex-col gap-5 mb-20 justify-center items-center"
      v-if="comedyMovies.length > 0"
    >
      <div class="grid lg:grid-cols-4 gap-10 md:grid-cols-2">
        <Card
          v-for="movie in comedyMovies.slice(0, comedyCount)"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </section>

    <!-- Action Section -->
    <div class="flex justify-around mb-5">
      <h4 class="text-[28px] text-customWhite">Action</h4>
      <h4
        class="text-[28px] text-customWhite cursor-pointer"
        @click="loadMore('action')"
      >
        More
      </h4>
    </div>
    <section
      class="secondHomepage flex flex-col gap-5 mb-20 justify-center items-center"
      v-if="actionMovies.length > 0"
    >
      <div class="grid lg:grid-cols-4 gap-10 md:grid-cols-2">
        <Card
          v-for="movie in actionMovies.slice(0, actionCount)"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </section>

    <!-- Fantasy Section -->
    <div class="flex justify-around mb-5">
      <h4 class="text-[28px] text-customWhite">Fantasy</h4>
      <h4
        class="text-[28px] text-customWhite cursor-pointer"
        @click="loadMore('fantasy')"
      >
        More
      </h4>
    </div>
    <section
      class="secondHomepage flex flex-col gap-5 mb-20 justify-center items-center"
      v-if="fantasyMovies.length > 0"
    >
      <div class="grid lg:grid-cols-4 gap-10 md:grid-cols-2">
        <Card
          v-for="movie in fantasyMovies.slice(0, fantasyCount)"
          :key="movie.id"
          :movie="movie"
        />
      </div>
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
      comedyMovies: [],
      actionMovies: [],
      fantasyMovies: [],
      comedyCount: 4,
      actionCount: 4,
      fantasyCount: 4,
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
      } else if (genre === "action") {
        this.actionCount += 4;
      } else if (genre === "fantasy") {
        this.fantasyCount += 4;
      }
    },
  },
};
</script>

<style scoped></style>
