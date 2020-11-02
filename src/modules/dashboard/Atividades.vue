<template>
  <v-container >
    <h2 class="my-5 font-weight-bold">Atividades</h2>
    <div class="text-left">
      <v-dialog
          v-model="dialog"
          width="500"
        >

          <template v-slot:activator="{ on, attrs }">
            <!-- botão -->
            <v-btn v-bind="attrs" v-on="on" rounded outlined color="white" x-large>
              <v-icon @click="add" x-large color="green" >mdi-plus-circle</v-icon>
            </v-btn>
          </template>

          <!-- janela para adicionar uma nova atividade -->
          <v-card>
            <v-card-title class="headline grey lighten-2">
            Nova Atividade
            </v-card-title>

            <v-card-text>
              <v-form ref="form">
              <!-- campo de texto da atividade -->       
              <v-text-field label="Atividade" v-model="atividade" hide-details="auto" prepend-icon="mdi-folder-upload-outline" :rules="requires"></v-text-field>
              
              <!-- campo de data -->
              <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field :rules="requires" v-model="dateFormatted" label="Prazo" persistent-hint  v-bind="attrs" @blur="date = parseDate(dateFormatted)" v-on="on" prepend-icon="mdi-calendar-blank-multiple"></v-text-field>
                </template>
                <v-date-picker v-model="date" locale="pt-br" @input="menu1 = false"></v-date-picker>
              </v-menu>

              <!-- campo de texto da descrição -->
              <v-textarea label="Descrição" v-model="descricao" hide-details="auto" prepend-icon="mdi-information-outline"></v-textarea>        
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <!-- ações de confirmação e delete -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog = false" rounded>
                <v-icon color="red" x-large>mdi-cancel</v-icon>
              </v-btn>
              <v-btn color="white" text @click="addAtividade" rounded>
                <v-icon color="green" x-large>mdi-check</v-icon>
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>
      <div>

        <!-- janelas das atividades -->
        <v-row >
          <v-col v-for="atividade in tarefas" :key="atividade" >
            <v-card  height="320px" width="300px" elevation="4" class="ma-3">

              <v-card-title class="justify-center rounded-t-md green darken-2" >        
                <h2 style="color:white;" >{{atividade.Atividade}}</h2>  
              </v-card-title>

              <v-divider></v-divider>
              <br>
              <h2 class="text-center">Validade: {{atividade.Prazo}}</h2>
              <p class="py-3 px-8">{{atividade.Descrição}}</p>

            </v-card>
          </v-col>
        </v-row>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
name:'Atividades',
data() {
    return {
      exibir:false,
      tarefas:[],
      dialog:'',
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      atividade:'',
      descricao:'',
      tarefa:{},
      requires: [
        x =>  x && x.length > 0 || 'Campo obrigatório.'

      ]

    }
},  watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
methods: {
    add(){      
      this.exibir=!this.exibir      
    },
    addAtividade(){
      this.tarefa.prazo=this.dateFormatted
      this.tarefa.atividade=this.atividade
      this.tarefa.descricao=this.descricao
              
      if(this.$refs.form.validate()){

              this.tarefas.push({"Prazo":this.tarefa.prazo,"Atividade":this.atividade,"Descrição":this.descricao})
            
              this.dialog=!this.dialog

      }

    },

    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
},
}
</script>