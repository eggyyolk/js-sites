<template>
  <h1>{{ title }}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <teleport to=".modal" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Lorem ipsum,</a>
        <a href="#">dolor sit amet.</a>
      </template>
      <h1>What is Lorem Ipsum?</h1>
      <p> In layman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy.</p>
``
    </Modal>
</teleport>

   <teleport to=".modal" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>What is Lorem Ipsum?</h1>
      <p> In layman's terms, Lorem Ipsum is a dummy or placeholder text.</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">Click</button>
  <button @click="toggleModalTwo">ClickTwo</button>
</template>

 <script>
import Modal from './components/Modal.vue'

  export default {
   name: 'App',
   components: { Modal },
   data() {
     return {
       title: 'Lorem ipsum consectetur',
      //  header: "Ipsum",
      //  text: "Consectetur", 
       showModal: false,
       showModalTwo: false
       }
     },
     methods: {
       toggleModal() {
         this.showModal = !this.showModal
       },
       toggleModalTwo() {
         this.showModalTwo = !this.showModalTwo
     }
   }
  }
 </script>

 <style>
 #app, #modal {
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
 </style>
