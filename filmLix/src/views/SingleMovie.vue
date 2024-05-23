<template>
    <section class="w-full flex lg:flex-row sm:flex-col gap-10 justify-center my-20 lg:items-start sm:items-center" v-if="movie">
        <div class="singleCard md:">
            <Card :movie="movie" class="w-[300px] h-auto" />
        </div>
        <div class="cardDescription text-white flex flex-col gap-10">
            <div class="title flex flex-col leading-tight">
                <h2 class="text-[60px] font-bold">{{ movie.Title }}</h2>
                <div class="flex gap-10 text-md">
                    <p>{{ movie.Year }}</p>
                    <p>Directed by {{ movie.Director }}</p>
                </div>
            </div>
            <div class="description flex flex-col gap-2 lg:w-[500px] sm:w-[300px]">
                <p>{{ movie.Plot }}</p>
                <p class="text-xs">{{ movie.Runtime }}</p>
            </div>
            
            <div class="grid grid-cols-2 grid-rows-2 lg:w-[400px] sm:w-[200px] text-sm">
                <div class="font-bold">Genres</div>
                <div class="col-start-1 row-start-2 font-bold">Actors</div>
                <div class="col-start-2 row-start-1">{{ movie.Genre }}</div>
                <div>{{ movie.Actors }}</div>
            </div>
    
        </div>
    </section>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    components: { Card },
    props: ['id'],
    data() {
        return {
            movie: null
        };
    },
    mounted() {
        fetch(`http://localhost:3000/movies/${this.id}`)
            .then(response => response.json())
            .then(data => {
                this.movie = data;
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            });
    }
};
</script>

<style scoped></style>