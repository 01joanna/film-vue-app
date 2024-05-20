<template>
   <div class="card" v-if="movie">
      <a href=""><img :src="movie.Poster" class="rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-200 w-full h-[85%]" alt=""></a>
      <div class="w-full h-12 flex justify-around items-center text-xl">
         <a href=""><i class="fa-regular fa-eye cardIcon text-customBlack"></i></a>
         <a href=""><i class="fa-regular fa-heart cardIcon text-customBlack"></i></a>
         <a href=""><i class="fa-regular fa-bookmark cardIcon text-customBlack"></i></a>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      movie: Object
   }
};
</script>