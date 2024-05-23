<template>
   <div class="card" v-if="movie">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
         <img :src="movie.Poster"
            class="rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-200 w-[300px] h-[85%]" alt="">
      </router-link>
      <div class="w-full h-12 flex justify-around items-center text-xl">
         <a @click.prevent="addToWatchedMovies"><i class="fa-regular fa-eye cardIcon text-customBlack"></i></a>
         <a @click.prevent="addToFavoriteMovies"><i class="fa-regular fa-heart cardIcon text-customBlack"></i></a>
         <a @click.prevent="addToWatchlistMovies"><i class="fa-regular fa-bookmark cardIcon text-customBlack"></i></a>
      </div>
   </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies.js';

export default {
   props: {
      movie: Object,
   },
   setup(props) {
      const store = useMoviesStore();

      const addToWatchedMovies = () => {
         store.addWatchedMovie(props.movie);
      };

      const addToFavoriteMovies = () => {
         store.addFavoriteMovie(props.movie);
      };

      const addToWatchlistMovies = () => {
         store.addWatchlistMovie(props.movie);
      };

      return {
         addToWatchedMovies,
         addToFavoriteMovies,
         addToWatchlistMovies
      };
   }
};
</script>

<style scoped>
</style>