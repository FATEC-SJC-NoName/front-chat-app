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
/**
 *  <v-main>
      <Chat />
    </v-main>
      <Dashboard2 />
    <v-main>
      <Dashboard />
    </v-main>


<v-bottom-navigation :value="value" color="primary" >
              <v-card class="text-center">
               
                <v-icon large>mdi-account-circle</v-icon>
                <br>
                 <span>Criar atividades</span>
              </v-card>

              <v-btn>
                <span>Atividades concluidas</span>
                
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn>
                <span>Atividades atrasadas</span>
                <v-icon>mdi-alert</v-icon>
              </v-btn>
              
    </v-bottom-navigation>







    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
 */
</script>

