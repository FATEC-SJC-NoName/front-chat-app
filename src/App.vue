<template>
 
  <v-app style="background-color:#EEEEEE">
    <navegacao/>

      <v-content>
        <router-view/>
        <Chat />
      </v-content>


  </v-app> 
</template>

<style>
.scroll {
   overflow-y: scroll;
   max-height:65%;
}</style>
<script lang="ts">
import Vue from "vue";
import Chat from "./modules/chat/Chat.vue";
import Atividades from "./modules/dashboard/Atividades.vue"
import Navegacao from "@/components/Navegacao.vue"
export default Vue.extend({
  name: "App",

components: {

    Navegacao,
    Chat

  //Calendar
  },

  data: () => ({
    fab: false,
    alunos:[{nome:'Fernando'},{nome:'Antoni'},{nome:'Celso'},{nome:'Paulo'},{nome:'Cauã'},{nome:'Gabriel'},{nome:'Guilherme'}],
    instrutores:[{nome:'Sakaue'},{nome:'Claudio'},{nome:'Walmir'},{nome:'Agliberto'},{nome:'Araki'}],
    diretores:[{nome:'Jair'},{nome:'Messias'}],
    atendentes:[{nome:'Bruna Ferraz'},{nome:'Julia Paes'},{nome:'Monica Mattos'},{nome:'Tiffany'},{nome:'Natasha'},{nome:'Vivi Brunery'},{nome:'Paula Tejano'}],
  }),


});
</script>

