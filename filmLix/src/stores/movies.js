import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state: () => ({
        watchedMovies: JSON.parse(localStorage.getItem('watchedMovies')) || [],
        favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) || [],
        watchlistMovies: JSON.parse(localStorage.getItem('watchlistMovies')) || [],
    }),
    actions: {
        addWatchedMovie(movie) {
            if (!this.watchedMovies.find((m) => m.id === movie.id)) {
                this.watchedMovies.push(movie);
                this.removeFromWatchlist(movie);
                this.saveToLocalStorage();
            }
        },
        addFavoriteMovie(movie) {
            if (!this.favoriteMovies.find((m) => m.id === movie.id)) {
                this.favoriteMovies.push(movie);
                this.saveToLocalStorage();
            }
        },
        addWatchlistMovie(movie) {
            if (!this.watchlistMovies.find((m) => m.id === movie.id)) {
                this.watchlistMovies.push(movie);
                this.saveToLocalStorage();
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('watchedMovies', JSON.stringify(this.watchedMovies));
            localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
            localStorage.setItem('watchlistMovies', JSON.stringify(this.watchlistMovies));
        },
        removeFromWatchlist(movie) {
            this.watchlistMovies = this.watchlistMovies.filter((m) => m.id !== movie.id);
            this.saveToLocalStorage();
        },
        isWatched(movie) {
            return this.watchedMovies.some((m) => m.id === movie.id);
        },
        isFavorite(movie) {
            return this.favoriteMovies.some((m) => m.id === movie.id);
        },
        isInWatchlist(movie) {
            return this.watchlistMovies.some((m) => m.id === movie.id);
        }
    },
});
