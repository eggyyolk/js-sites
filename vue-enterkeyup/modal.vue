<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Pangolin&display=swap');
</style>

<template>
  <div class="backdrop" @click="closeModal" >
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default{
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
    
}
</script>


<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top:0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
.modal h1{
  color: rgb(90, 90, 90);
  border: none;
  padding: 0;
}
.modal p{  color: rgb(70, 70, 70);
  font-size: 30px 
}
.modal.sale {
  background: rgb(255, 255, 255);
  color: white;
}
.modal.sale h1 {
  color:rgb(141, 141, 141);
}
</style>
