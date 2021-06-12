<template>
  <div v-if="error"> {{ error }} </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="Click" class="delete">Delete</button>
    </div>
    <div v-else>
      <Spinner />
  </div>
</template>

<script>
import getPost from'/composables/getPost'
import Spinner from '../components/Spinner.vue'
import {useRoute, useRouter} from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    console.log(route)

    const { post, error, load } = getPost(route.params.id)

  load()

  const Click = async () => {
    await projectFirestore.collection('posts').doc(props.id).delete()

    router.push({ name: 'Home' })
  }

  return { Click, post, error }
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
button.delete {
  margin: 10px auto;
}
</style>
