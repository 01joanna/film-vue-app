<template>
    <div>
        <h2>Watchlist</h2>
        <ul>
            <li v-for="movie in watchlistMovies" :key="movie.id">
                {{ movie.Title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { useMoviesStore } from '../stores/movies';

export default {
    setup() {
        const store = useMoviesStore();

        return {
            watchlistMovies: store.watchlistMovies
        };
    }
};
</script>

<style scoped>
</style>