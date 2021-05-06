<template>
  <h1>{{ title }}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ut. Laudantium architecto, sapiente vitae nemo ea.</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div>
  <button @keyup.enter="toggleModal">enter</button>
</template>

 <script>
import Modal from './components/Modal.vue'

  export default {
   name: 'App',
   components: { Modal },
   data() {
     return {
       title: 'title',
       header: "header",
       text: "text", 
       showModal: false
       }
     },
     methods: {
       toggleModal() {
         this.showModal = !this.showModal
       }
     }
   }
 </script>

 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #000000;
   margin-top: 60px;
 }
 h1 {
   border-bottom: 1px solid #ddd;
   display: inline-block;
   padding-bottom: 10px;
 }
 </style> -->
