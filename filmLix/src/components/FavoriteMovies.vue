<template>
    <div>
        <h2>Favorite Movies</h2>
        <ul>
            <li v-for="movie in favoriteMovies" :key="movie.id">
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
            favoriteMovies: store.favoriteMovies
        };
    }
};
</script>

<style scoped></style>