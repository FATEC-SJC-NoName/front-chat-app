<template>
  <v-card width="400px">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ message }}
    </v-card-text>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Message",
  props: {
    title: String,
    message: String
  }
})
export default class Message extends Vue {}
</script>

<style></style>
