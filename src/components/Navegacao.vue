<template>
  <nav>
     
    <v-navigation-drawer v-model="drawer" app color="teal lighten-3">
      <v-container class="justify-space-between ma-12" fluid>
        
        <h2 v-if="User">Bem vindo {{User.name}}</h2>
        
        <span v-if="isLoggedIn">
          <a @click="logout">Sair</a>
        </span>
      </v-container>
      <!-- botões de navegação -->
      <v-list rounded>
        <v-list-item
          v-for="rotas in routes"
          :key="rotas.text"
          router
          :to="rotas.route"
        >
          <v-list-item-action>
            <v-icon color="black">{{ rotas.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="white--text">
            <v-list-item-title>{{ rotas.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

    

        <!-- botão dropdown -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-for="names in list" :key="names.text">
              <v-layout v-bind="attrs" v-on="on">
                <v-list-item-action>
                  <v-icon color="black">{{ names.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content class="white--text">
                  <v-list-item-title>{{ names.text }}</v-list-item-title>
                </v-list-item-content>
              </v-layout>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item
              v-for="nome in items"
              :key="nome.text"
              route
              :to="nome.route"
            >
              <v-list-item-title>{{ nome.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list>
    </v-navigation-drawer>

    <!-- header da pagina -->
    <v-app-bar app color="teal lighten-1">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        color="teal lighten-4"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">NONAME</v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {


  name:'Navegacao',

  computed:{
      isLoggedIn: function(){
          return this.$store.getters.isAuthenticated
      },
      ...mapGetters({User: "StateUserInfo"})
      
         
      
  },



  methods:{
      async logout(){
          await this.$store.dispatch('LogOut')
          this.$router.push('/login')
      }
  },

  data: () => ({
    drawer: false,
    routes: [
      { icon: "mdi-home", text: "Tela Inicial", route: "/" },
      { icon: "mdi-folder-outline", text: "Atividades", route: "/atividades" },
      { icon: "mdi-alert-rhombus-outline", text: "Calendário", route: "/testes" },
    ],
    list: [{ icon: "mdi-account-supervisor-circle-outline", text: "Contatos" }],
    items: [
      { title: "Alunos", route: "/contatos/alunos" },
      { title: "Atendentes", route: "/contatos/atendentes" },
      { title: "Instrutores", route: "/contatos/instrutores" },
      { title: "Diretores", route: "/contatos/diretores" },
    ],

  }),


};
</script>