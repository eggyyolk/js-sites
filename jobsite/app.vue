<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs
    </router-link>
  </div>

  <hr>

  <button @click="click">Redirect</button>
  <button @click="back">Back</button> 
  <button @click="forward">Forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
  redirect() {
    this.$router.push({ name: 'Home' })
  },
  back() {
    this.$router.go(-1)
  },
  forward() {
    this.$router.go(1)
  }
}
}
</script>

<style>
#app {
  font-family: 'Roboto', san-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d4f52;
  font-weight: 500;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 598;
  color: #72767A;
  text-decoration: none;
  padding: 10px;
  border-radius: 3px;
}

#nav a.router-link-exact-active {
  color: #6A6B6D;
  background:#F6F6F6;
}
button {
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0 8px;
  padding: 10px;
  border: none;
  border-radius: 22px;
  background: white;
  color: #727272;
  }
button:hover {
  background: #f3f8ff;
 color: #426FAC;
 cursor: pointer;
}
hr {
  width: 30%;
}
</style>
