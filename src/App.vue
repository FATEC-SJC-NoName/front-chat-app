<template>
  <div id="app">
    <div class="columns">

      <div class="column" v-if="ExibirChat">
        <ChatBox></ChatBox>
      </div>
      <div class="column" v-if="ExibirDashboard">
        <Dashboard></Dashboard>
      </div>



      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld  msg="Chat NoName"/>    
      </div>
  
      <fab :position="position" position-type="absolute" :bg-color="bgColor" :actions="fabActions" main-icon="account_circle" 
      @dashboard="dashboard" @chatBox="chatBox" start-opened="false" toggle-when-away="true"></fab>

    </div>
    

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import fab from 'vue-fab'
import ChatBox from './components/ChatBox.vue'
import Dashboard from './components/Dashboard.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,fab,ChatBox,Dashboard
  },
   data(){
      return {
          ExibirChat:false,
          ExibirDashboard:false,          
          bgColor: '#009900',
          position: 'bottom-left',
        
          
          fabActions: [
              {
                  icon:'dashboard',
                  name:'dashboard'
              },
             {             
                icon: 'chat',
                name: 'chatBox',                
              }
          ]
      }
  },
  created(){
      this.Exibir=false

  },
  methods:{
      dashboard(){
         // alert('dashboard clicado');
          this.ExibirDashboard=!this.ExibirDashboard
      },
      chatBox(){
         // alert('chat clicado');
          this.ExibirChat=!this.ExibirChat
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
