
import { defineStore } from 'pinia';

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        watchedMovies: [],
        watchlistMovies: [],
        favoriteMovies: []
    }),
    actions: {
        addWatchedMovie(movie) {
            if (!this.watchedMovies.some(m => m.id === movie.id)) {
                this.watchedMovies.push(movie);
            }
        },
        addWatchlistMovie(movie) {
            if (!this.watchlistMovies.some(m => m.id === movie.id)) {
                this.watchlistMovies.push(movie);
            }
        },
        addFavoriteMovie(movie) {
            if (!this.favoriteMovies.some(m => m.id === movie.id)) {
                this.favoriteMovies.push(movie);
            }
        }
    }
});
