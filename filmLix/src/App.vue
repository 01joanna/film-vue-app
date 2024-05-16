<script >
  import HeaderFeature from "./components/HeaderFeature.vue"
  import Carrusel from "./components/Carrusel.vue"
  import Searchbar from "./components/Searchbar.vue"
  export default {
    components: { HeaderFeature, Carrusel, Searchbar }
  }
</script>

<template>
  <HeaderFeature/>
    <body class="flex flex-col justify-center">
        <searchbar/>
        <carrusel/>
      </body>
</template>

<style >

</style>
