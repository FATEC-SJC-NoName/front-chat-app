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
          style="position: fixed; top: 80%; right: 5%"
        >
          <template v-slot:activator>
            <v-btn
              v-model="fab"
              color="blue darken-1"
              x-large
              dark
              fab
              v-bind="attrs"
              v-on="on"
            >
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-forum </v-icon>
               <a href="#"
onclick="window.open('http://localhost:3000/chatbot?code_user=1010463086029595',
'',
'width=410,height=450')">
Bot
</a>
            </v-btn>
          </template>
        </v-speed-dial>
      </template>

     

    

     
    </v-bottom-sheet>
  </div>
</template>

<script>



export default {
  name: "Chatbot",

  data() {
    return {
      exibirChat: false,
      text: null,
      exibir: false,
      robot: false,
      sheet: false
    };
  },

  methods: {
    MostraChat() {
      this.exibirChat = !this.exibirChat;
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


};
</script>

<style></style>
