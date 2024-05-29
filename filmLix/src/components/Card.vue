<template>
   <div class="card" v-if="movie">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
         <img :src="movie.Poster"
            class="rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-200 w-[300px] h-[85%]" alt="">
      </router-link>
      <div class="w-full h-12 flex justify-around items-center text-xl">
         <a @click.prevent="toggleWatchedMovie">
            <i class="fa-regular fa-eye cardIcon" :style="{ color: isWatched ? 'green' : 'black' }"></i>
         </a>
         <a @click.prevent="toggleFavoriteMovie">
            <i class="fa-regular fa-heart cardIcon" :style="{ color: isFavorite ? 'red' : 'black' }"></i>
         </a>
         <a @click.prevent="toggleWatchlistMovie">
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

      const toggleWatchedMovie = () => {
         store.addOrRemoveWatchedMovie(props.movie);
         const action = isWatched.value ? 'added to' : 'removed from';
         alert(`Film ${action} your watched movies list`);
      };

      const toggleFavoriteMovie = () => {
         store.addOrRemoveFavoriteMovie(props.movie);
         const action = isFavorite.value ? 'added to' : 'removed from';
         alert(`Film ${action} your favorite movies list`);
      };

      const toggleWatchlistMovie = () => {
         store.addOrRemoveWatchlistMovie(props.movie);
         const action = isInWatchlist.value ? 'added to' : 'removed from';
         alert(`Film ${action} your watchlist movies list`);
      };

      return {
         toggleWatchedMovie,
         toggleFavoriteMovie,
         toggleWatchlistMovie,
         isWatched,
         isFavorite,
         isInWatchlist
      };
   }
};
</script>

<style scoped></style>
