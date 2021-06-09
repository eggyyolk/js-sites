<template>
<header>
	<h1>
	<span class="material-icons">
textsms
</span>

		Forum</h1>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'Create' }">New Post</router-link>
  </nav>
	</header>
</template>

<script>
export default {

}
</script>

<style>
 header {
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 max-width: 1200px;
	 margin: 0 auto;
	 padding: 10px;
 }
 header h1 {
	 color: #575757;
	 font-size: 48px;
 }
 header a {
	 color: rgb(100, 100, 100);
	 text-decoration: none;
	 margin-left: 20px;
 }
 header a.router-link-active{
	 color: #444;
	 font-weight: bold;
 }
 header h1 .span{
	 font-size: 100px;
	 margin-right: 13px;
	 position: relative;
	bottom: 2px;
 }
</style>
