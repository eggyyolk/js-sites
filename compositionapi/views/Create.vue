<template>
  <div class="irrelevance">
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags</label>
      <input 
        v-model="tag" 
        type="text"
        @keydown.enter.prevent="handleKeydown"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        # {{tag}}
      </div>
      <button>Post</button>
    </form>
  </div>
  </div> 
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])
    const router = useRouter()

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '')
        tags.value.push(tag.value)
      }
      tag.value = ''
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value
      }
      
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })

    router.push({name: 'Home'})
  }
    return { title, body, tag, handleKeydown, tags, handleSubmit }
  }
}
</script>

<style>
form{
  margin: 0 auto;
  text-align: left;
}
input, textarea {
  display: block;
  margin: 7px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 50px;
  border: 1px solid #c9c9c9;
}
textarea{
  height: 219px
}
label{
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 17px;
  margin-bottom: 10px 
}
button {
  border-radius: 16px;
  cursor: pointer;
  display: block;
  margin-top: 30px;
  color: white;
  background: #3eb2ff;
  border: none;
  padding: 8px 16px;
  font-size: 17px
}
button:hover{
  background: #21a1f7;
}
.pill {
  font-family: 'Lato', sans-serif;
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #5a5a5a;
  background: #f1f1f1;
  padding: 8px;
  border-radius: 30px;
  font-size: 15px;
}
</style>
