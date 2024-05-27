
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => ({
        watchedMovies: [],
        favoriteMovies: [],
        watchlistMovies: [],
    }),
    actions: {
        addWatchedMovie(movie) {
            if (!this.watchedMovies.find((m) => m.id === movie.id)) {
                this.watchedMovies.push(movie);
            }
        },
        addFavoriteMovie(movie) {
            if (!this.favoriteMovies.find((m) => m.id === movie.id)) {
                this.favoriteMovies.push(movie);
            }
        },
        addWatchlistMovie(movie) {
            if (!this.watchlistMovies.find((m) => m.id === movie.id)) {
                this.watchlistMovies.push(movie);
            }
        },
    },
});
