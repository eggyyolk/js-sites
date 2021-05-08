<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Pangolin&display=swap');
</style>

<template>
  <div class="backdrop" @click="closeModal" >
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ["theme"], 
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
  background: rgb(61, 61, 61);
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
  color: rgb(68, 68, 68);
  border: none;
  padding: 0;
}
.modal p{
  font-size: 30px;
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 3px solid rgb(99, 99, 99);
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background: #f1f1f1;
  color: rgb(94, 94, 94);
}
.modal.sale h1 {
  color:rgb(165, 165, 165);
}
.modal.sale actions{
  color: white;
}
.modal.sale .actions a {
  color: white;
}
</style>
