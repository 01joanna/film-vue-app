
<script setup>
import { RouterView, RouterLink } from 'vue-router';
import HeaderFeature from "./components/HeaderFeature.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <HeaderFeature/>
  <main>
    <RouterView />
  </main>
  <Footer/>
  
</template>

<style >

</style>