<template>
  <v-container>
    <Navegacao />
    <br />
    <br />
    <br />
    <h2 class="my-5 font-weight-bold">Atividades</h2>
    <div class="text-left">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <!-- botão -->
          <v-btn
            v-bind="attrs"
            v-on="on"
            rounded
            outlined
            color="white"
            x-large
          >
            <v-icon @click="add" x-large color="green">mdi-plus-circle</v-icon>
          </v-btn>
        </template>

        <!-- janela para adicionar uma nova atividade -->
        <v-card>
          <v-card-title class="headline grey lighten-2">
            Nova Atividade
          </v-card-title>
          <!-- atividade vai conter:
    title - texto - possui
    description - texto - possui
    user - tem que pegar do state
    isActive - tem que enviar true
    
    -->
          <v-card-text>
            <v-form>
              <!-- campo de texto da title atividade -->
              <v-text-field
                label="Atividade"
                v-model="form.title"
                hide-details="auto"
                prepend-icon="mdi-folder-upload-outline"
                :rules="requires"
              ></v-text-field>

              <!-- campo de data  -->
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    :rules="requires"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint                     
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                    prepend-icon="mdi-calendar"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  locale="pt-br"
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>

              <!-- final campo data -->

              <!-- campo de texto da descrição -->
              <v-textarea
                label="Descrição"
                v-model="form.description"
                hide-details="auto"
                prepend-icon="mdi-information-outline"
              ></v-textarea>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <!-- ações de confirmação e delete -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="dialog = false" rounded>
              <v-icon color="red" x-large>mdi-cancel</v-icon>
            </v-btn>
            <v-btn @click="addAtividade" color="white" rounded>
              <v-icon color="green" x-large>mdi-check</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div v-if="Atividades">
        <!-- listar as atividades -->
        <v-row>
          <v-col v-for="atividade in Atividades.activities" :key="atividade.id">
            <v-card height="320px" width="300px" elevation="4" class="ma-3">
              <v-card-title class="justify-center rounded-t-md green darken-2">
                <h2 style="color: white">{{ atividade.title }}</h2>
                <!-- titulo -->
              </v-card-title>

              <v-divider></v-divider>
              <br />
              <h2 class="text-center">Data: {{ datarender(atividade.date) }}</h2>
       
              <!-- prazo -->
              <p class="py-3 px-8">{{ atividade.description }}</p>
              <!-- descricao -->
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from 'moment'
import Navegacao from "@/components/Navegacao.vue";



export default {
  name: "Atividades",
  data() {
    return {
      exibir: false,
      tarefas: [],
      dialog: "",  
      date: new Date().toISOString().substr(0, 10),    
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),      
      atividade: "",
      menu1: false,
      menu2: false,
      tarefa: {},
      requires: [(x) => (x && x.length > 0) || "Campo obrigatório."],

      form: {
        //passar aqui o que está no formulario - referencia é o login
        title: "",
        description: "",
        userId: this.$store.getters.StateUserInfo.id,
        isActive: true,
        date: ""  
      
      
      },
    };
  },

  components:{
    Navegacao
  },
  watch: {
    date(val) {
      console.log(val);
      this.dateFormatted = this.formatDate(this.date);
      this.form.date = this.formatDateSend(this.date)
      localStorage.setItem("date", this.form.date)
    },

  },


  computed: {
    ...mapGetters({ Atividades: "StateUserInfo" }),
  },
  methods: {
    add() {
      this.exibir = !this.exibir;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;    
    },
    formatDateSend(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}${month}${day}`;      
    },
    datarender: function(date){
      return moment(date, 'YYYYMMDD').format('DD/MM/YYYY')
    },

    ...mapActions(["CreateActivitie"]),

    async addAtividade() {
      //  if (this.$refs.form.validate()) {
      try {
        await this.CreateActivitie(this.form);
      } catch (error) {
        throw "Não foi possivel adicionar atividade";
      }
      this.dialog = !this.dialog;
    },
    //    },
  },
};
</script>
