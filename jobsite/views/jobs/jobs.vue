
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:200, 300, 400, 500, 600, 700, 800, 900&display=swap');

</style>


<template>
  <h1>Jobs</h1>
	<div v-for="job in jobs" :key="job.id" class="job">
		<router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
		  <h2> {{ job.title }} </h2>
		</router-link>
	</div>
</template>

<script>
export default {
  data() {
		return {
			jobs: [
				{ title: 'UX Designer', id: 1, details: 'Lorem Ipsum'},
				{ title: 'Web Developer', id: 2, details: 'Lorem Ipsum'},
				{ title: 'Vue Developer', id: 3, details: 'Lorem Ipsum'}
			]
		}
	}
}
</script>

<style>
.job h2 {
  color: #395066;
	font-family: 'Open Sans', sans-serif;
	text-decoration: none;
	background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 240px;
  cursor: pointer;
}
.job h2:hover {
  background: #ddd;
}
.job a{
  text-decoration: none;
}
</style> 
