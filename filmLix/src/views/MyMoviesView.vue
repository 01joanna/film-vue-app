<template>
    <h1>My Movies</h1>
    <watched-movies />
</template>
    
<script>
import WatchedMovies from '../components/WatchedMovies.vue';
import FavoriteMovies from '../components/FavoriteMovies.vue';
import WatchlistMovies from '../components/WatchlistMovies.vue';

export default {
    components: {
        WatchedMovies,
        FavoriteMovies,
        WatchlistMovies
    }
};
    
</script>
    
<style>
    
</style>