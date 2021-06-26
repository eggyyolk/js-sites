<template>
  <div class="welcome container">		
    <div v-if="showLogin">
      <h2>Log in your account</h2>
      <LoginForm @login="enterChat"/>
      <p>No account yet? <span @click="showLogin = false">Sign up.</span></p>
    </div>
    <div v-else>
      <h2>Make an account</h2>
      <SignupForm @signup="enterChat"/>
      <p>Already registered? <span @click="showLogin = true">Log in.</span></p>
    </div>
	</div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
	components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showLogin, enterChat }
  }
}
</script>

<style>
	.welcome{
		text-align: center;
		padding: 20px 0;
	}
	.welcome form {
		width: 300px;
		margin: 15px auto;
	}
	.welcome label {
		display: block;
		margin: 20px 0 10px;
	}
	.welcome input {
		width: 100%;
		padding: 10px;
		border-radius: 20px;
		border: 1px solid #eee;
		outline: none;
		color: rgb(114, 114, 114);
		margin: 10px auto;
	}
  .welcome span {
    color: #ff1971;
    font-weight: bold;
    cursor: pointer;
    }

  .welcome span:hover {
        display: inline-block;
    transition: 1s;
    transform: translateY(-5px);
  }
  .welcome button {
    margin: 20px auto;
  }
</style>
