<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
</style>


<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070707;
  max-width: 40%;
  margin-left: auto;
  margin-right: auto;
  width: 34em
}
</style>
