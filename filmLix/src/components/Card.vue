<script>
   import movies from "../movies.json"
   let moviesArr=[]
   export default{
      data(){
         return{
            moviesArr : movies.movies,
           

         }
      }
   }
   
   
</script>


<template>
   <div class="card">
      <a href=""><img :src="`${moviesArr[2].Poster}`"  class="rounded-lg hover:translate-x-1 hover:-translate-y-1 duration-200 w-full" alt=""></a>
      <div class="w-full h-12 flex justify-around items-center text-xl">
         <i class="fa-regular fa-eye cardIcon"></i>
         <i class="fa-regular fa-heart cardIcon"></i>
         <i class="fa-regular fa-bookmark cardIcon"></i>
         
      </div>
   </div>
</template>


