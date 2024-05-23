<template>
    <div>
        <section>
            <Searchbar />
        </section>
        
        <section class="flex flex-col gap-5 mt-10 mb-20 justify-center px-28 items-center ">
            <h3 class="text-[40px] text-customWhite w-full pl-6 text-left">Lists</h3>
            
            <!-- Comfort Movies LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                   <h3 class="listOrGenreTitle">Comfort Movies</h3> 
                   <button v-if="this.comfortMoviesMore == true" class=" pb-0  h-1" @click="loadMore('comfort')">more</button>
                   <button v-if="this.comfortMoviesMore == false" class=" pb-0 h-1" @click="loadLess('comfort')">less</button>
                </div>
                <div v-if="comfortMovies" class="cardsDiv">
                    <Card v-for="movie in comfortMovies.slice(0, comfortMoviesCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Visually Insane LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Visually Insane</h4>
                    <button v-if="this.visuallyInsaneMore == true" class=" pb-0 h-1" @click="loadMore('insane')">more</button>
                    <button v-if="this.visuallyInsaneMore == false" class=" pb-0 h-1" @click="loadLess('insane')">less</button>
                </div>
                <div v-if="visuallyInsane" class="cardsDiv">
                    <Card v-for="movie in visuallyInsane.slice(0, visuallyInsaneCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Neverending Christmas LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Neverending Christmas</h4>
                    <button v-if="this.neverendingChristmasMore == true" class=" pb-0 h-1" @click="loadMore('christmas')">more</button>
                    <button v-if="this.neverendingChristmasMore == false" class=" pb-0 h-1" @click="loadLess('christmas')">less</button>
                </div>
                <div v-if="neverendingChristmas" class="cardsDiv">
                    <Card v-for="movie in neverendingChristmas.slice(0, neverendingChristmasCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Studio Ghibli LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Studio Ghibli</h4>
                    <button v-if="this.studioGhibliMore == true" class=" pb-0 h-1" @click="loadMore('ghibli')">more</button>
                    <button v-if="this.studioGhibliMore == false" class=" pb-0 h-1" @click="loadLess('ghibli')">less</button>                    
                </div>
                <div v-if="studioGhibli" class="cardsDiv">
                    <Card v-for="movie in studioGhibli.slice(0, studioGhibliCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Old Hollywood LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Old Hollywood</h4>
                    <button v-if="this.oldHollywoodMore == true" class=" pb-0 h-1" @click="loadMore('hollywood')">more</button>
                    <button v-if="this.oldHollywoodMore == false" class=" pb-0 h-1" @click="loadLess('hollywood')">less</button>                     
                </div>
                <div v-if="oldHollywood" class="cardsDiv">
                    <Card v-for="movie in oldHollywood.slice(0, oldHollywoodCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>
        </section>
    </div>
</template>
    
<script >
    import Searchbar from "../components/Searchbar.vue";
    import Card from "../components/Card.vue";

    export default {
        components: { Searchbar, Card },
        data() {
            return {
            // Lists data
            movies: null,
            comfortMovies: null,
            visuallyInsane:null,
            neverendingChristmas: null,
            studioGhibli:null,
            oldHollywood:null,

            // Amount of films displayed
            moviesCount: 4,
            comfortMoviesCount:4,
            visuallyInsaneCount:4,
            neverendingChristmasCount: 4,
            studioGhibliCount:4,
            oldHollywoodCount:4,

            // More/Less buttons checker
            comfortMoviesMore:true,
            visuallyInsaneMore:true,
            neverendingChristmasMore: true,
            studioGhibliMore:true,
            oldHollywoodMore:true,
            };
        },
        mounted() {
        fetch('http://localhost:3000/lists')
            .then(response => response.json())
            .then(data => {
            this.comfortMovies = data[0].comfortMovies.slice(0, data[0].comfortMovies.length);
            this.visuallyInsane = data[0].visuallyInsane.slice(0, data[0].visuallyInsane.length);
            this.neverendingChristmas = data[0].neverendingChristmas.slice(0, data[0].neverendingChristmas.length);
            this.studioGhibli = data[0].studioGhibli.slice(0, data[0].studioGhibli.length);
            this.oldHollywood = data[0].oldHollywood.slice(0, data[0].oldHollywood.length);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
        },
        methods:{
            loadMore(listType){
                if (listType === "comfort"){
                    this.comfortMoviesCount+=6;
                    this.comfortMoviesMore = false;
                } else if(listType === "insane"){
                    this.visuallyInsaneCount+=6;
                    this.visuallyInsaneMore = false;
                } else if(listType === "christmas"){
                    this.neverendingChristmasCount +=6;
                    this.neverendingChristmasMore = false;
                } else if(listType === "ghibli"){
                    this.studioGhibliCount+=6;
                    this.studioGhibliMore = false
                }else if(listType === "hollywood"){
                    this.oldHollywoodCount+=6;
                    this.oldHollywoodMore = false
                }
            },
            loadLess(listType){
                if(listType == "comfort"){
                    this.comfortMoviesCount -=6
                    this.comfortMoviesMore = true
                } else if(listType === "insane"){
                    this.visuallyInsaneCount-=6;
                    this.visuallyInsaneMore = true;
                } else if(listType === "christmas"){
                    this.neverendingChristmasCount -=6;
                    this.neverendingChristmasMore = true;
                } else if(listType === "ghibli"){
                    this.studioGhibliCount-=6;
                    this.studioGhibliMore = true
                } else if(listType === "hollywood"){
                    this.oldHollywoodCount-=6;
                    this.oldHollywoodMore = true
                }
 
            }
        }

    };
</script>
    
<style>
    
</style>