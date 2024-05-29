// En tu tienda de Pinia
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => ({
        watchedMovies: JSON.parse(localStorage.getItem('watchedMovies')) || [],
        favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || [],
        watchlistMovies: JSON.parse(localStorage.getItem('watchlistMovies')) || [],
    }),
    actions: {
        addOrRemoveWatchedMovie(movie) {
            const index = this.watchedMovies.findIndex((m) => m.id === movie.id);
            if (index === -1) {
                this.watchedMovies.push(movie);
            } else {
                this.watchedMovies.splice(index, 1);
            }
            localStorage.setItem('watchedMovies', JSON.stringify(this.watchedMovies));
        },
        addOrRemoveFavoriteMovie(movie) {
            const index = this.favoriteMovies.findIndex((m) => m.id === movie.id);
            if (index === -1) {
                this.favoriteMovies.push(movie);
            } else {
                this.favoriteMovies.splice(index, 1);
            }
            localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
        },
        addOrRemoveWatchlistMovie(movie) {
            const index = this.watchlistMovies.findIndex((m) => m.id === movie.id);
            if (index === -1) {
                this.watchlistMovies.push(movie);
            } else {
                this.watchlistMovies.splice(index, 1);
            }
            localStorage.setItem('watchlistMovies', JSON.stringify(this.watchlistMovies));
        },
        isWatched(movie) {
            return this.watchedMovies.some((m) => m.id === movie.id);
        },
        isFavorite(movie) {
            return this.favoriteMovies.some((m) => m.id === movie.id);
        },
        isInWatchlist(movie) {
            return this.watchlistMovies.some((m) => m.id === movie.id);
        },
    },
});
