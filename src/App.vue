<template>
  <v-app style="background-color:#EEEEEE">
    <navegacao />

    <v-content>
      <router-view />
      <!-- <Chat /> -->
    </v-content>
  </v-app>
</template>

<style>
.scroll {
  overflow-y: scroll;
  max-height: 65%;
}
</style>
<script lang="js">
import Vue from "vue";
import Chat from "./modules/chat/pages/Chat.vue";
import Navegacao from "@/components/Navegacao.vue";
export default Vue.extend({
  name: "App",

  components: {
    Navegacao
    
  },
});
</script>
