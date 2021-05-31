<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id }}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id
    }
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })
      }).then(() => {
        this.$emit('complete', this.project.id)
      }).catch(err => console.log(err))
    }
  }
  
};

</script>

<style>
.project {
	margin: 20px auto;
	background: white;
	padding: 10px 20px;
	border-radius: 4px;
	box-shadow: 1px 2px 3px #0000000d;
	border-left: 5px solid #ffffff;

}
 .project:hover {
	transform: translateY(1px);
	transition: 0.6s
}
h3 {
	cursor: pointer;
}
.actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.material-icons {
	font-size: 24px;
	margin-left: 14px;
	color: #bbb;
	cursor: pointer;
}
.material-icons:hover {
	color: #9c9c9c;
	transform: translateY(-1px);
	transition: 0.6s
	
}
.project.complete {
	border-left: 5px solid #beeaff;
}
</style>
