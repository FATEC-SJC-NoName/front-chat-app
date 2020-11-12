<template>
  <v-app style="background-color:#EEEEEE">
    <navegacao />

    <v-content>
      <router-view />
      <Chat />
    </v-content>
  </v-app>
</template>

<style>
.scroll {
  overflow-y: scroll;
  max-height: 65%;
}
</style>
<script lang="ts">
import Vue from "vue";
import Chat from "./modules/chat/Chat.vue";
import Navegacao from "@/components/Navegacao.vue";
export default Vue.extend({
  name: "App",

  components: {
    Navegacao,
    Chat,
  },
});
</script>
