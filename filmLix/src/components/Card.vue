<template>
   <div class="card" v-if="movie">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
         <img :src="movie.Poster"
            class="rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-200 w-[300px] h-[85%]" alt="">
      </router-link>
      <div class="w-full h-12 flex justify-around items-center text-xl">
         <a @click.prevent="addToWatchedMovies">
            <i class="fa-regular fa-eye cardIcon" :style="{ color: isWatched ? 'green' : 'black' }"></i>
         </a>
         <a @click.prevent="addToFavoriteMovies">
            <i class="fa-regular fa-heart cardIcon" :style="{ color: isFavorite ? 'red' : 'black' }"></i>
         </a>
         <a @click.prevent="addToWatchlistMovies">
            <i class="fa-regular fa-bookmark cardIcon" :style="{ color: isInWatchlist ? 'blue' : 'black' }"></i>
         </a>
      </div>
   </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies.js';
import { computed } from 'vue';

export default {
   props: {
      movie: Object,
   },
   setup(props) {
      const store = useMoviesStore();

      const isWatched = computed(() => store.isWatched(props.movie));
      const isFavorite = computed(() => store.isFavorite(props.movie));
      const isInWatchlist = computed(() => store.isInWatchlist(props.movie));

      const addToWatchedMovies = () => {
         store.addWatchedMovie(props.movie);
         alert('Film added to your watched movies list');
      };

      const addToFavoriteMovies = () => {
         store.addFavoriteMovie(props.movie);
         alert('Film added to your favorite movies list');
      };

      const addToWatchlistMovies = () => {
         store.addWatchlistMovie(props.movie);
         alert('Film added to your watchlist movies list');
      };

      return {
         addToWatchedMovies,
         addToFavoriteMovies,
         addToWatchlistMovies,
         isWatched,
         isFavorite,
         isInWatchlist
      };
   }
};
</script>

<style scoped></style>
