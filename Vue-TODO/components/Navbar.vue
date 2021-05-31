<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add a New Draft</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a{
  font-family: sans-serif;
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: rgb(139, 139, 139);
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #adadad;
  padding-bottom: 4px;
}
.main-nav:hover{
  transform: translateY(-1px);
	transition: 4s
}
</style>
