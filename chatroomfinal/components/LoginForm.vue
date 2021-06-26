<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{ error }}</div> 
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../src/composables/useLogin'

export default {
setup(props, context) {
  const email = ref('')
  const password = ref('')

  const { error, login } = useLogin()
	
  const handleSubmit = async () => {
		await login(email.value, password.value)
    if (!error.value) {
      context.emit('login')
    }
	}

  return { password, email, handleSubmit,error }
}
}
</script>

<style>

</style>
