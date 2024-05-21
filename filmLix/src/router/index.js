import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleMovie from '../views/SingleMovie.vue'
import GenresView from '../views/GenresView.vue'
import ListsView from '../views/ListsView.vue'
import MyMovies from '../views/MyMoviesView.vue'
import Random from '../views/RandomMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/myMovies',
      name: 'myMovies',
      component: MyMovies
    },
    {
      path: '/genres',
      name: 'genres',
      component: GenresView
    },
    {
      path: '/lists',
      name: 'lists',
      component: ListsView
    },
    {
      path: '/random',
      name: 'random',
      component: Random
    },
    {
      path: '/movie/:id',
      name: 'Movie Details',
      component: SingleMovie,
      props: true
    },



  ]
})

export default router
