<template>
<form @submit.prevent="handleSubmit">
	<label>Title:</label>
	<input type="text" v-model="title" required>
	<label>Details:</label>
	<textarea v-model="details" required></textarea>
	<button>Add Project</button>
</form>
</template>

<script>
export default {
data() {
	return {
			title: '',
			details: ''
	}
},
methods: {
	handleSubmit() {
			let project = {
				title: this.title,
				details: this.details,
				complete: false
			}
			
			fetch('http://localhost:3000/projects', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(project)
			}).then(() => {
				this.$router.push('/')
			}).catch((err) => console.log(err))
	}
}
}
</script>

<style>
form {
	background: white;
	padding: 20px;
	border-radius: 5px;
}
label {
	font-family: 'Poppins', sans-serif;
	display: block;
	color: #696969;
	font-size: 12px;
	letter-spacing: 2px;
	margin: 19px 0 10px 0
}
input {
	padding: 10px;
	border: 0;
	border-bottom: 1px solid #b4b4b4;
	width: 99%;
	box-sizing: border-box;
	height: 50px;
}
textarea {
	border: 1px solid #b4b4b4;
	padding: 10px;
	width: 100%;
	box-sizing: border-box;
	height: 100px;
}
form button {
	font-family: 'Poppins', sans-serif;
	display: block;
	margin: 28px auto 0;
	background: #b3b3b3;
	color: white;
	padding: 9px;
	border: 0;
	border-radius: 4px;
	font-size: 13px;
	cursor: pointer;
}
</style>
