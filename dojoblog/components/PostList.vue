<template class="main">
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('mounted'))
    onUnmounted(() => console.log('unmounted'))
    onUpdated(() => console.log('updated'))
  }
}
</script>

<style>
</style>
