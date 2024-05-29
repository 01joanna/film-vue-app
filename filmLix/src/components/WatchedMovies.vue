<template>
  <div>
    <div class="flex justify-between items-center mb-5 mx-[13rem]">
      <h2 class="text-2xl">Watched Movies</h2>
      <h4 class="text-md text-customWhite cursor-pointer" @click="loadMore()" v-if="watchedMovies.length > watchedMoviesCount">
        more
      </h4>
    </div>
    <section class="secondHomepage flex flex-col gap-5 mb-20 justify-center items-center">
      <div class="grid lg:grid-cols-4 gap-10 md:grid-cols-2" v-if="watchedMovies.length > 0">
        <Card v-for="(movie) in watchedMovies.slice(0, watchedMoviesCount)" :key="movie.id" :movie="movie" />
      </div>
      <p v-else class="text-xl text-customWhite">You still haven't added any movies to the watched list</p>
    </section>
  </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies';
import Card from '../components/Card.vue'; 

export default {
  components: {
    Card
  },
  setup() {
    const store = useMoviesStore();
    let watchedMoviesCount = 4;

    return {
      watchedMovies: store.watchedMovies,
      watchedMoviesCount
    };
  },
  methods: {
    loadMore() {
      this.watchedMoviesCount = this.watchedMovies.length;
    },
  }
};
</script>

<style scoped></style>
