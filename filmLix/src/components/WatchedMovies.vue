<template>
    <div>
        <h2>Watched Movies</h2>
        <ul>
            <li v-for="movie in watchedMovies" :key="movie.id">
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
            watchedMovies: store.watchedMovies
        };
    }
};
</script>

<style scoped></style>