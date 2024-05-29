<template>
    <section class="myMovies mx-24">
        <h3 class="text-[40px] text-customWhite mt-10 px-20 w-full md:pl-6 text-left">My Movies</h3>
        <div class="flex flex-col mt-5 ">
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