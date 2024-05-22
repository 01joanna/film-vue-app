<template>
    <div>
        <section>
            <Searchbar />
        </section>
        <section class="secondHomepage mx-44 mt-4 flex flex-col gap-8 mb-20">
            <h3 class="text-[40px] text-customWhite">Lists</h3>
            <section class="mb-6">
                <h3 class="listTitle">Comfort Movies</h3>
                <div v-if="comfortMovies" class="listCardsDiv">
                    <Card v-for="movie in comfortMovies" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <section class="mb-6">
                <h4 class="listTitle">Visually Insane</h4>
                <div v-if="visuallyInsane" class="listCardsDiv">
                    <Card v-for="movie in visuallyInsane" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <section class="mb-6">
                <h4 class="listTitle">Neverending Christmas</h4>
                <div v-if="neverendingChristmas" class="listCardsDiv">
                    <Card v-for="movie in neverendingChristmas" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <section class="mb-6">
                <h4 class="listTitle">Studio Ghibli</h4>
                <div v-if="studioGhibli" class="listCardsDiv">
                    <Card v-for="movie in studioGhibli" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <section class="mb-6">
                <h4 class="listTitle">Old Hollywood</h4>
                <div v-if="oldHollywood" class="listCardsDiv">
                    <Card v-for="movie in oldHollywood" :key="movie.id" :movie="movie" />
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
            movies: null,
            comfortMovies: null,
            visuallyInsane:null,
            neverendingChristmas: null,
            studioGhibli:null,
            oldHollywood:null,
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
        }
    };
</script>
    
<style>
    
</style>