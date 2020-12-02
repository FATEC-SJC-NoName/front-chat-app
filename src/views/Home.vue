<template>

  <div  >
     <Navegacao />
      
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    <!-- <v-btn @click="login">login</v-btn>-->
    <Chat />
  </div>
</template>
<script>
import { mapActions} from 'vuex';
import Navegacao from "@/components/Navegacao.vue";
import Chat from "./Chat";


export default {
  name: "Home",
  components: {
    Navegacao,
    Chat
  },
  created: function(){
    this.getUserInfo(),
    this.getContatos()
  },
  methods:{
    ...mapActions(["getUserInfo"]),
    ...mapActions(["getContatos"])
  },

};
</script>


