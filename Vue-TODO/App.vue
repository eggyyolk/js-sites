<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
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
body {
  background: #f3f7fa;
}
#app {
  font-family:'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

</style>
