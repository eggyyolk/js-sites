<style>
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@200&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&family=Varela+Round&display=swap');
</style>
<template>
  <div id="app">
    <div class="container">
      <h1>VUE TODO!</h1>
      <input
        class="input"
        v-model="newToDo"
      />
      <button class="add-button" @click="add()">Add</button>
      <ul style="list-style-type: none;">
        <li v-for="(todo,i) in ExistingToDo">
          <span>
            {{i + 1}}: {{todo.text}}
          </span>
          <button class="delete-button" @click="deleteToDo(i)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newToDo: '',
      ExistingToDo: [
        {text: 'Get Groceries', id:0},
        {text: 'Do Laundry', id:1},
        {text: 'Wash Uniform', id:2}
      ]
    }
  },
  methods:{
    add(){
      this.ExistingToDo.push({
        text: this.newToDo,
        id: new Date().valueOf()
      }),
      this.newToDo=''
      },
      deleteToDo(i){
        this.ExistingToDo.splice(i,1)
      }
  }
};
</script>

<style>
#app {
  font-family: 'Antonio', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #53708d;
  margin-top: 60px;
}
button {
    font-family: 'Antonio', sans-serif;
    color: rgb(127, 139, 161);
    background-color: transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    transform: scale(0.95, 0.95);
    transition: transform 0.6s
}
.delete-button:hover{
  color: #3a525a;
}
.add-button:hover{
  color: rgb(122, 183, 253);
}
</style>

