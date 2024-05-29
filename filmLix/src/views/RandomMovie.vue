<template>

    <!-- RANDOM BUTTON -->
    <div class="flex justify-center mt-10 w-full">
        <button @click="pushRand()" class="getRandomMovieButton">Click to get a random film</button> 
    </div>
  
    <!-- RANDOM MOVIE SECTION -->
    <section class="w-full flex lg:flex-row sm:flex-col gap-10 justify-center mt-16 mb-20 lg:items-start sm:items-center" v-if="movie">
        
        <!-- CARD -->
        <div class="singleCard">
            <Card v-for="singMovie in randomMovie" :movie="singMovie" :key="singMovie.id" class="w-[300px] h-auto" />
        </div>
        
        <!-- RANDOM MOVIE INFO -->
        <div class="cardDescription text-white flex flex-col gap-10">
            <div class="title flex flex-col leading-tight">
                <h2 class="text-[60px] font-bold">{{ randomMovie[0].Title }}</h2>
                <div class="flex gap-10 text-md">
                    <p>{{ randomMovie[0].Year }}</p>
                    <p>Directed by {{ randomMovie[0].Director }}</p>
                </div>
            </div>
            <div class="description flex flex-col gap-2 lg:w-[500px] sm:w-[300px]">
                <p>{{ randomMovie[0].Plot }}</p>
                <p class="text-xs">{{ randomMovie[0].Runtime }}</p>
            </div>
            
            <div class="grid grid-cols-2 grid-rows-2 lg:w-[400px] sm:w-[200px] text-sm">
                <div class="font-bold">Genres</div>
                <div class="col-start-1 row-start-2 font-bold">Actors</div>
                <div class="col-start-2 row-start-1">{{ randomMovie[0].Genre }}</div>
                <div>{{ randomMovie[0].Actors }}</div>
            </div>
    
        </div>
        
    </section>
    
</template>
    
<script >
    import Card from '../components/Card.vue';
    export default {
    components: { Card },
    props: ['id'],
    data() {
        return {
            movie: null,
            randomMovie: []
        };
    },
    mounted() {
        fetch(`http://localhost:3000/movies`)
            .then(response => response.json())
            .then(data => {
                this.movie = data;
                this.randomMovie.push(this.movie[this.getRandomNumber()]);
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
            }
        );
    },
    methods:{
        getRandomNumber(){
            return Math.floor((Math.random() * this.movie.length) + 1);
        },
        pushRand(){
            this.randomMovie = [];
            this.randomMovie.push(this.movie[this.getRandomNumber()]);  
            console.log(this.randomMovie)
        }
    }
};
</script>
    
<style>
    
</style>