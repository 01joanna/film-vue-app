<script >
  import HeaderFeature from "./components/HeaderFeature.vue"
  import Carrusel from "./components/Carrusel.vue"
  import Searchbar from "./components/Searchbar.vue"
  import Footer from "./components/Footer.vue"
  export default {
    components: { HeaderFeature, Carrusel, Searchbar, Footer}
  }
</script>

<template>
  <HeaderFeature/>
    <body class="flex flex-col justify-center ">
      <section class="firstHomepage">
        <searchbar/>
        <carrusel/>
      </section>
      <section class="secondHomepage mx-20">
        <h3 class="text-[40px] text-customWhite">What's new</h3>
      </section>

      </body>
      <Footer />
</template>

<style >

</style>
