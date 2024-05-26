<template>
        <nav class="md:flex md:justify-between md:items-center py-3 lg:px-28 bg-customGray z-100 ">
            <div class=" mx-4 flex justify-between items-center">
                <RouterLink to="/">
                    <img src="../assets/filmlix_logo.png" alt="">
                    <h2 class="uppercase md:text-center text-2xl font-light text-customWhite logoText">filmlix</h2>
                </RouterLink>
                <span>
                    <i class="fa-solid fa-bars burgerMenu" name="menu" @click="burgerMenuFunc()"></i>
                </span>
            </div>
            <ul class="headerUl">
                <li class="myLi "><RouterLink active-class="activeHeaderLi" to="/allMovies">All movies</RouterLink></li>
                <li class="myLi "><RouterLink active-class="activeHeaderLi" to="/myMovies">My movies</RouterLink></li>
                <li class="myLi "><RouterLink active-class="activeHeaderLi" to="/genres">Genres</RouterLink></li>
                <li class="myLi "><RouterLink active-class="activeHeaderLi" to="/lists">Lists</RouterLink></li>
                <li class="myLi"><RouterLink active-class="activeHeaderLi" to="/random">Random</RouterLink></li>
                
            </ul>
            
        </nav>
</template>

<script>
export default {
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    burgerMenuFunc() {
      let list = document.querySelector("ul");
      if (this.toggleMenu === false) {
        list.style = "opacity:100";
        this.toggleMenu = true; 
        
      } else if (this.toggleMenu !== false) {
        list.style = "opacity:0";
        this.toggleMenu = false;
        list.style = "z-index:-1";
      }
    },
  },
};
</script>
