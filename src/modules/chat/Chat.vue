<template>
  <div class="text-left">

    <!-- botão flutuante -->
    <v-bottom-sheet scrollable v-model="sheet" inset width="600" max-width="800" transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-speed-dial v-model="fab" top style="position: fixed; top: 80%; left: 5%;"  >
          <template v-slot:activator>
            <v-btn v-model="fab" color="green darken-1" x-large dark fab v-bind="attrs" v-on="on">
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-forum </v-icon>
            </v-btn>

          </template>
        </v-speed-dial>
      </template>

      <!-- header do campo de duvidas -->
      <v-card min-width="500" max-width="800" class="justify-lg-center">
        <v-card-title style="background-color:green" class="justify-center rounded-t-md elevation-5">
          <h2 style="color:white" >Dúvidas NoName</h2> 
        </v-card-title >           
        <br>     
        
        <v-card-text style="height: 800px" class="my-2">
          <!-- campo de pesquisa -->
          <v-text-field outlined height="60" label="Pesquisar" style="font-size:25px;" prepend-inner-icon="mdi-file-find-outline" class="mx-16 my-2"></v-text-field>
          
          <!-- duvidas -->
          <div class="text-center">
            <h2 style="color:black">Duvidas Frequentes</h2>
            <br>
            <!-- lista das duvidas -->
            <v-list style="justify-content: center;text-align: left;display: grid;">
              <v-list-item-group v-model="selectedItem" color="primary" class="text-center mb-9"><v-divider></v-divider>
                <v-list-item class="list-group-item list-group-item-action" href="#">1 - Segunda via de boleto</v-list-item><v-divider></v-divider>
                <v-list-item class="list-group-item list-group-item-action" href="#">2 - Verificar hora e dia das minhas aulas</v-list-item><v-divider></v-divider>
                <v-list-item class="list-group-item list-group-item-action" href="#">3 - Agendar aula</v-list-item><v-divider></v-divider>
                <v-list-item class="list-group-item list-group-item-action" href="#">4 - Outro</v-list-item><v-divider></v-divider>
              </v-list-item-group>
            </v-list>  

            <!-- botão para chamar o bot -->
            <h3>Não encontrou uma solução?</h3>
            <br>  
            <v-btn elevation="24" large rounded color="green darken-1" style="color:white" @click="MostraChat()"> Clique aqui para falar com nosso bot</v-btn> 
                
          </div>
        </v-card-text>  
      </v-card>
      
      <!-- ????? o Bot fica aqui -->
      <v-card min-width="700" max-width="900" style="right:90%"  v-if="exibirChat">
        <v-card-title style="background-color:green" class="justify-center">
          <h1 style="color:white" >ChatBot NoName</h1><v-spacer></v-spacer> 
          <v-btn elevation="24" fab small style="color:white" @click="MostraChat()" outlined>
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-card-title >           
        <br>

        <v-card-text style="height: 600px;" class="my-3">
          
           <v-card-text class="text-center">
           
             <v-card style="background-color:#F5F5F5; font-size:18px" width="600">
               <v-row>
                  <v-col class="text-left">
                <v-icon x-large>mdi-robot</v-icon>
              </v-col>
                 <v-col cols="10">
                <label >Olá, meu nome é ConduBot. Deseja falar com um atendente?</label>
               </v-col>
              </v-row>
                 <v-btn color="green darken-1" style="color:white" left rounded large @click="atendente">Sim</v-btn>
             <v-btn color="red darken-1" style="color:white" right rounded large @click="bot">Não</v-btn>
             </v-card >
              <br>
             <v-card style="background-color:#F5F5F5; font-size:18px" width="600" v-if="robot"> 
              <v-row>
                 <v-col class="text-left">
                  <v-icon x-large>mdi-robot</v-icon>
                </v-col>
                <v-col cols="10">
                  <label> Digite sua duvida, que eu tentarei ajuda-lo.</label>
                </v-col>
               
              </v-row>
             </v-card>
       </v-card-text>     
                  
      </v-card-text> 
    <v-footer absolute>
      
        <v-text-field outlined rounded color="blue" background-color="white" append-icon="mdi-send" @keyup.native.enter='EnviandoMensagem(texto.mensagem)'
      @click:append="EnviandoMensagem(texto.mensagem)" ></v-text-field>
    </v-footer>
    </v-card>

    <!-- O Chat fica aqui -->
    <v-card min-width="700" max-width="900" style="right:90%"  v-if="exibir">
        <v-card-title style="background-color:green" class="justify-center">
          <h1 style="color:white" >Chat NoName</h1><v-spacer></v-spacer>
          <v-btn elevation="24" fab small style="color:white" @click="atendente" outlined>
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn> 
        </v-card-title >           
        <br>

        <v-card-text style="height: 600px;" class="my-3">
          
           <v-card-text class="text-center">

           <v-col cols="9">
             <v-card style="background-color:#F5F5F5; font-size:18px" width="500">
               <v-row>
                 <v-col class="text-left">
                <v-icon x-large>mdi-account</v-icon>
              </v-col>
                 <v-col cols="10">
                <label >Olá, meu nome é Pedro. Em que posso ajudá-lo?</label>
               </v-col>
               </v-row>               
             </v-card >
             </v-col> 
              <br>
          <v-row>
                  <v-col cols="3"></v-col>
                <v-col cols="9">

                  <v-card class="text-right" color="green" width="500" v-for="texto in textosEnviados" :key="texto"> 
                    
                    <v-row class="mt-4">                      
                      <v-col cols="10">
                      <v-card-text style="font-size:18px;color:white;">{{texto.mensagem}} 
                      </v-card-text>
                    </v-col>
                    <v-col class="text-right">
                      <v-icon x-large color="white">mdi-account</v-icon>
                    </v-col>
                    </v-row>
                    <br>
                  </v-card>
                    </v-col>
        </v-row>
        <br>
       </v-card-text>     
                  
      </v-card-text> 
    <v-footer absolute>
      
        <v-text-field v-model="texto.mensagem" outlined rounded color="blue" background-color="white" append-icon="mdi-send" @keyup.native.enter='EnviandoMensagem(texto.mensagem)'
      @click:append="EnviandoMensagem(texto.mensagem)" ></v-text-field>
    </v-footer>
    </v-card>










    </v-bottom-sheet>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Message } from "@/components";
import { MessageRepository } from "@/repositories";

@Component({
  components: {
    Message
  }
})

export default class Chat extends Vue {
data() {
  return {
    exibirChat:false,
    textosEnviados:[],
    texto:{mensagem:''},
    exibir:false,
    robot:false
  }
}
  MostraChat(){
    this.exibirChat=!this.exibirChat
  }
  EnviandoMensagem(texto){
      if(texto){
      this.textosEnviados.push({mensagem:texto});
     // this.scrollToEnd()
      this.texto.mensagem=''
      }
      
  }
  atendente(){
      this.exibir=!this.exibir,
      this.exibirChat=false

  }
  bot(){
      this.robot=true
      
  }
  scrollToEnd() {    	
    const container = document.getElementById("scroll");
    container.scrollTop = container.scrollHeight;        
  }


sheet = false;
  messages = [];

  async fetchMessages() {
    this.sheet = !this.sheet;
    const repository = new MessageRepository();
    this.messages = await repository.fetchAll();
    console.log(this.messages);
  }
}
</script>

<style></style>
