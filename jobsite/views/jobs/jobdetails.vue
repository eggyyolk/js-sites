<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job ID is {{ id }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <p>incididunt ut labore et dolore magna aliqua purus faucibus .</p>
    <p>Ornare suspendisse sed. Neque sodales ut etiam sit amet nisl purus in. Eu facilisis sed odio morbi.</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>

</template>

<script>
export default {
	props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
		fetch('http://localhost:3000/jobs/' + this.id)
			.then(res => res.json())
			.then(data => this.job = data)
			.catch(err => console.log(err.message))
  }
}
</script>

<style>
</style>
