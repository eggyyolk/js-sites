<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p> {{ snippet }} </p> 
    <span v-for="tag in post.tags" :key="tag">
      # {{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 1000)
      })

    return { snippet }
  }
}
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #b8b8b8;
  width: 518px;
  padding: 10px;
  border: 1px solid rgb(163, 163, 163);
}
.post h3{
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: rgb(43, 43, 43);
  margin-bottom: 10px;
  max-width: 400px;
}
.post p {
  font-size: 16px;
}
</style>
