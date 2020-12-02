<template>
  <div class="text-left">
    <!-- botão flutuante -->
    <v-bottom-sheet
      scrollable
      v-model="sheet"
      inset
      width="600"
      max-width="800"
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-speed-dial
          v-model="fab"
          top
          style="position: fixed; top: 80%; left: 5%"
        >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
              color="green darken-1"
              x-large
              dark
              fab
              v-bind="attrs"
              v-on="on"
            >
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-forum </v-icon>
            </v-btn>
          </template>
        </v-speed-dial>
      </template>

      <!-- header do campo de duvidas -->
      <v-card min-width="500" max-width="800" class="justify-lg-center">
        <v-card-title
          style="background-color: green"
          class="justify-center rounded-t-md elevation-5"
        >
          <h2 style="color: white">Chat Empresarial</h2>
        </v-card-title>
        <br />

        <v-card-text style="height: 800px" class="my-2">
   

          <!-- duvidas -->
          <div class="text-left">
            <br />
            <h2 style="color: black">Contatos:</h2>
          
            <br />

            <v-btn
              v-for="contato in Contatos"
              :key="contato.id"
              id="connect"
              color="blue darken-1"
              style="color: white"
              left
              rounded
              large
              @click="connect('ca3f40f1-d1ae-4972-ad71-deef1714027e')"
              ><v-icon x-large>mdi-account</v-icon>{{ contato.name }}</v-btn
            >
            
          </div>
        </v-card-text>
      </v-card>

      <!-- o Bot fica aqui -->
      <v-card
        min-width="700"
        max-width="900"
        style="right: 90%"
        v-if="exibirChat"
      >
        <v-card-title style="background-color: green" class="justify-center">
          <h1 style="color: white">ChatBot NoName</h1>
          <v-spacer></v-spacer>
          <v-btn
            elevation="24"
            fab
            small
            style="color: white"
            @click="MostraChat()"
            outlined
          >
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-card-title>
        <br />

        <v-card-text style="height: 600px" class="my-3">
          <v-card-text class="text-center">
            <v-card
              style="background-color: #f5f5f5; font-size: 18px"
              width="600"
            >
              <v-row>
                <v-col class="text-left">
                  <v-icon x-large>mdi-robot</v-icon>
                </v-col>
                <v-col cols="10">
                  <label
                    >Olá, meu nome é ConduBot. Deseja falar com um
                    atendente?</label
                  >
                </v-col>
              </v-row>
              <v-btn
                id="connect"
                color="green darken-1"
                style="color: white"
                left
                rounded
                large
                @click="connect"
                >Sim</v-btn
              >
              <v-btn
                color="red darken-1"
                style="color: white"
                right
                rounded
                large
                @click="bot"
                >Não</v-btn
              >
            </v-card>
            <br />
            <v-card
              style="background-color: #f5f5f5; font-size: 18px"
              width="600"
              v-if="robot"
            >
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
          <v-text-field
            outlined
            rounded
            color="blue"
            background-color="white"
            append-icon="mdi-send"
          ></v-text-field>
        </v-footer>
      </v-card>

      <!-- O Chat fica aqui -->
      <v-card min-width="700" max-width="900" style="right: 90%" v-if="exibir">
        <v-card-title style="background-color: green" class="justify-center">
          <h1 style="color: white">Chat NoName</h1>
          <v-spacer></v-spacer>
          <v-btn
            elevation="24"
            fab
            small
            style="color: white"
            @click="atendente"
            outlined
          >
            <v-icon>mdi-keyboard-backspace</v-icon>
          </v-btn>
        </v-card-title>
        <br />

        <v-card-text style="height: 600px" class="my-3">
          <v-card-text class="text-center">
            <v-col cols="9">
              <v-card
                style="background-color: #f5f5f5; font-size: 18px"
                width="500"
              >
              
              </v-card>
            </v-col>
            <br />
            <v-row>
              <v-col cols="3"> </v-col>
              <v-col cols="9">
                <v-card
                  class="text-right"
                  color="green"
                  width="500"
                  v-for="message in messages"
                  :key="message"
                >
                  <v-row class="mt-4">
                    <v-col cols="10">
                      {{message.senderName}}
                      <v-card-text style="font-size: 18px; color: white"
                        >{{ message.body }}
                      </v-card-text>
                    </v-col>
                    <v-col class="text-right">
                      <v-icon x-large color="white">mdi-account</v-icon>
                    </v-col>
                  </v-row>
                  <br />
                </v-card>
              </v-col>
            </v-row>
            <br />
          </v-card-text>
        </v-card-text>
        <v-footer absolute>
          <v-text-field
            v-model="text"
            outlined
            rounded
            color="blue"
            background-color="white"
            append-icon="mdi-send"
            @keyup.native.enter="sendMessage"
            @click:append="sendMessage"
          ></v-text-field>
        </v-footer>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { mapGetters } from "vuex";

export default {
  name: "Chat",

  data() {
    return {
      exibirChat: false,
      text: null,
      exibir: false,
      robot: false,
      sheet: false,
      messages: [],
    };
  },

  methods: {
    MostraChat() {
      this.exibirChat = !this.exibirChat;
    },

    connect(chatId) {
      this.exibir = !this.exibir;
      this.exibirChat = false;

      this.socket = new SockJS("http://3.90.183.159:8080/ws");
      //this.socket = new SockJS("http://localhost:8080/ws");
      this.stompClient = Stomp.over(this.socket);

      this.stompClient.connect(
        {},
        (frame) => {
          console.log(frame);
          this.stompClient.subscribe(
            "/chat/" + chatId + "/queue/messages",
            (resposta) => {
              this.messages.push(JSON.parse(resposta.body));

              //console.log(this.messages.body.body)
              //console.log("Essa e a resposta" + resposta.body);
              //this.messages.push(JSON.parse(resposta).content)
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
    },

    sendMessage() {
      if (this.stompClient && this.stompClient.connected) {
        const msg = {
          userId: this.$store.getters.StateUserInfo.id,
          chatId: "ca3f40f1-d1ae-4972-ad71-deef1714027e",
          body: this.text,
        };

        this.stompClient.send("/app/chat", {}, JSON.stringify(msg));
      }

      this.text = ""
    },

    bot() {
      this.robot = true;
    },
    scrollToEnd() {
      const container = document.getElementById("scroll");
      container.scrollTop = container.scrollHeight;
    },
    async fetchMessages() {
      this.sheet = !this.sheet;
    },
  },

  computed: {
    ...mapGetters({ Contatos: "StateContatosInfo" }),
  },
};
</script>

<style></style>
