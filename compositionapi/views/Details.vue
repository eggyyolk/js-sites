<template>
  <div v-if="error"> {{ error }} </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
    </div>
    <div v-else>
      <Spinner />
  </div>
</template>

<script>
import getPost from'/composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { post, error, load } = getPost(props.id)

  load()

  return { post,error }
  }
}
</script>

<style>
.post span {
  color: #5a5a5a;
  font-family: 'Poppins', sans-serif
}
  .post {font-family: 'Poppins', sans-serif;
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
  font-family: 'Poppins', sans-serif;
  color: #444;
  margin-left: auto;
  margin-right: auto;
  width: 30em
}
.pre {
  white-space: pre-wrap;
}
</style>
