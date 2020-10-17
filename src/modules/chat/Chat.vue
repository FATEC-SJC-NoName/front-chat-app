<template>
  <div class="text-center">
    <v-bottom-sheet
      scrollable
      v-model="sheet"
      inset
    >
      <template v-slot:activator="{ on, attrs }">

 <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          v-bind="attrs"
          v-on="on"
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-forum
          </v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
      </template>

 

      <v-card>
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <v-card-text style="height: 600px;" class="my-3">
          <div v-for="message in messages" :key="message">
            <Message />
          </div>
        </v-card-text>
        
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Message from "@/components/message/Message"

@Component({
  name: "Chat",
  components: {
    Message,
  },
  data () {
    return {
      sheet: false,
      messages: 99,
    }
  },
})

export default class Chat extends Vue{}
</script>

<style>

</style>