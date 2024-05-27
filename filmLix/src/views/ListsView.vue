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

            <!-- Best Marvel movies LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Best Marvel Movies</h4>
                    <button v-if="this.bestMarvelMore == true" class=" pb-0 h-1" @click="loadMore('marvel')">more</button>
                    <button v-if="this.bestMarvelMore == false" class=" pb-0 h-1" @click="loadLess('marvel')">less</button>                     
                </div>
                <div v-if="oldHollywood" class="cardsDiv">
                    <Card v-for="movie in bestMarvel.slice(0, bestMarvelCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Best movies about music LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Best Movies About Music</h4>
                    <button v-if="this.bestMusicMovieMore == true" class=" pb-0 h-1" @click="loadMore('music')">more</button>
                    <button v-if="this.bestMusicMovieMore == false" class=" pb-0 h-1" @click="loadLess('music')">less</button>                     
                </div>
                <div v-if="oldHollywood" class="cardsDiv">
                    <Card v-for="movie in bestMusicMovie.slice(0, bestMusicMovieCount)" :key="movie.id" :movie="movie" />
                </div>
            </section>

            <!-- Greatest Movies of the 1990s LIST -->
            <section class="mb-6">
                <div class="titleAndButtonsDiv">
                    <h4 class="listOrGenreTitle">Greatest Movies of the 1990s</h4>
                    <button v-if="this.great90sMore == true" class=" pb-0 h-1" @click="loadMore('great90s')">more</button>
                    <button v-if="this.great90sMore == false" class=" pb-0 h-1" @click="loadLess('great90s')">less</button>                     
                </div>
                <div v-if="oldHollywood" class="cardsDiv">
                    <Card v-for="movie in great90s.slice(0, great90sCount)" :key="movie.id" :movie="movie" />
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
            comfortMovies: [],
            visuallyInsane:[],
            neverendingChristmas: [],
            studioGhibli:[],
            oldHollywood:[],
            bestMarvel:[],
            bestMusicMovie: [],
            great90s: [],

            // Amount of films displayed
            moviesCount: 4,
            comfortMoviesCount: 4,
            visuallyInsaneCount: 4,
            neverendingChristmasCount: 4,
            studioGhibliCount: 4,
            oldHollywoodCount: 4,
            bestMarvelCount: 4,
            bestMusicMovieCount: 4,
            great90sCount: 4,

            // More/Less buttons checker
            comfortMoviesMore: true,
            visuallyInsaneMore: true,
            neverendingChristmasMore: true,
            studioGhibliMore: true,
            oldHollywoodMore: true,
            bestMarvelMore: true,
            bestMusicMovieMore: true,
            great90sMore: true,
            };
        },
        mounted() {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                
                // filling comfort Movies list
                for(let movieItem of data){
                    if(movieItem.Title === "The Grand Budapest Hotel"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="School of Rock"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Love Actually"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Pride & Prejudice"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Sing Street"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Moonrise Kingdom"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Scott Pilgrim vs. the World"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Amélie"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="Forrest Gump"){
                        this.comfortMovies.push(movieItem)
                    }else if(movieItem.Title ==="The Parent Trap"){
                        this.comfortMovies.push(movieItem)
                    }
                }
                // filling visually Insane list
                for(let movieItem of data){
                    if(movieItem.Title ==="Blade Runner 2049"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="The Secret Life of Walter Mitty"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="The Matrix"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="Arrival"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="Her"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="Interstellar"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="TRON: Legacy"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="Avatar: The Way of Water"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="Drive"){
                        this.visuallyInsane.push(movieItem)
                    }else if(movieItem.Title ==="La La Land"){
                        this.visuallyInsane.push(movieItem)
                    }
                }
                // filling neverending Christmas list
                for(let movieItem of data){
                    if(movieItem.Title ==="Home Alone"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="How the Grinch Stole Christmas!"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="The Santa Clause 3: The Escape Clause"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="Four Christmases"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="Home Alone 2: Lost in New York"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="Klaus"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="A Christmas Tale"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="Elf"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="A Christmas Story Christmas"){
                        this.neverendingChristmas.push(movieItem)
                    }else if(movieItem.Title ==="Happy Christmas"){
                        this.neverendingChristmas.push(movieItem)
                    }
                }
                // filling studio Ghibli list
                for(let movieItem of data){
                    if(movieItem.Title ==="My Neighbor Totoro"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Kiki's Delivery Service"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Spirited Away"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Princess Mononoke"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Howl's Moving Castle"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="The Boy and the Heron"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="The Wind Rises"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Castle in the Sky"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Grave of the Fireflies"){
                        this.studioGhibli.push(movieItem)
                    }else if(movieItem.Title ==="Porco Rosso"){
                        this.studioGhibli.push(movieItem)
                    }
                }
                // filling old Hollywood list
                for(let movieItem of data){
                    if(movieItem.Title ==="Vertigo"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="12 Angry Men"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Roman Holiday"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Some Like It Hot"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="The Wizard of Oz"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Mary Poppins"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Rear Window"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Psycho"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Sabrina"){
                        this.oldHollywood.push(movieItem)
                    }else if(movieItem.Title ==="Casablanca"){
                        this.oldHollywood.push(movieItem)
                    }
                }
                 
                for(let movieItem of data){
                    if(movieItem.Title ==="Black Panther"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Avengers: Endgame"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Thor: Ragnarok"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Iron Man"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Guardians of the Galaxy"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Captain America: The Winter Soldier"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Doctor Strange"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Captain America: Civil War"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="Spider-Man: No Way Home"){
                        this.bestMarvel.push(movieItem)
                    }else if(movieItem.Title ==="The Avengers"){
                        this.bestMarvel.push(movieItem)
                    }
                }

                for(let movieItem of data){
                    if(movieItem.Title ==="Whiplash"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Soul"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Amadeus"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Sing Street"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Coco"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Rocketman"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Ray"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="I'm Not There"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="Mr. Holland's Opus"){
                        this.bestMusicMovie.push(movieItem)
                    }else if(movieItem.Title ==="The Blues Brothers"){
                        this.bestMusicMovie.push(movieItem)
                    }   
                }

                for(let movieItem of data){
                    if(movieItem.Title ==="Pulp Fiction"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="Forrest Gump"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="Jurassic Park"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="The Lion King"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="Titanic"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="The Matrix"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="The Truman Show"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="The Green Mile"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="Braveheart"){
                        this.great90s.push(movieItem)
                    }else if(movieItem.Title ==="Groundhog Day"){
                        this.great90s.push(movieItem)
                    }   
                }
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
                }else if(listType === "marvel"){
                    this.bestMarvelCount+=6;
                    this.bestMarvelMore = false
                }else if(listType === "music"){
                    this.bestMusicMovieCount+=6;
                    this.bestMusicMovieMore = false
                }else if(listType === "great90s"){
                    this.great90sCount+=6;
                    this.great90sMore = false
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
                } else if(listType === "marvel"){
                    this.bestMarvelCount-=6;
                    this.bestMarvelMore = true
                } else if(listType === "music"){
                    this.bestMusicMovieCount-=6;
                    this.bestMusicMovieMore = true
                } else if(listType === "great90s"){
                    this.great90sCount-=6;
                    this.great90sMore = true
                }
 
            }
        }

    };
</script>
    
<style>
    
</style>