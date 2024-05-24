<template>
    <section class="myMovies mx-20">
        <h1 class="text-[32px] text-customWhite mt-10">My Movies</h1>
        <div class="flex flex-col">
            <WatchedMovies />
            <FavoriteMovies />
            <WatchlistMovies />
        </div>
    </section>
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