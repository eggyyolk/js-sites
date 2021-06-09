<template>
  <div class="tags">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
          <PostList :posts="postsWithTag" /> 
          <TagCloud :posts="posts"/>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPosts from '/composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
    components: {PostList, Spinner, TagCloud},
    setup() {
        const route = useRoute()
        const {posts, load, error} = getPosts()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        return { error, posts, postsWithTag }
    }
}
</script>

<style>

</style>
