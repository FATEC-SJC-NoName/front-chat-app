import Vue from "vue";
import Router from "vue-router";
import Home from "@/modules/dashboard/Home.vue";
import Atividades from "@/modules/dashboard/Atividades.vue";
import Teste from "@/modules/dashboard/Teste.vue"
import Aluno from "@/modules/dashboard/Aluno.vue"
import Diretor from "@/modules/dashboard/Diretor.vue"
import Instrutor from "@/modules/dashboard/Instrutor.vue"
import Atendente from "@/modules/dashboard/Atendente.vue"

Vue.use(Router);

export default new Router({
  routes: [
     {   
      path: "/",
      name: "Home",
      component: Home 
     },
    {
      path: "/atividades",
      name: "Atividades",
      component: Atividades
    },
    {
      path: "/testes",
      name: "Teste",
      component: Teste
    },
    {
      path: "/contatos/alunos",
      name: "Alunos",
      component: Aluno
    },
    {
      path: "/contatos/instrutores",
      name: "Instrutores",
      component: Instrutor
    },
    {
      path: "/contatos/diretores",
      name: "Diretores",
      component: Diretor
    },
    {
      path: "/contatos/atendentes",
      name: "Atendentes",
      component: Atendente
    }
]
});
