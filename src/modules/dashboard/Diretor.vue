<template style="background-color:black">
    <v-container>
    <div class="diretor">
    <h2 class="ma-5 font-weight-bold ">Diretores</h2>
    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 v-for="id in team" :key="id.name">

          <v-card flat class="text-center ma-3" shaped>
            <v-icon class="pt-4">mdi-account</v-icon>


          <v-card-text>
            <div class="subheading">{{id.name}}</div>
            <div class="grey--text">Diretor</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="white" outlined>
              <v-icon left>mdi-android-messages</v-icon>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-flex>



      </v-layout>
    </v-container>
    </div>
    </v-container>
</template>

<script>
export default {
  data: () => ({
  team: [
        { name: 'Marcelo Anderson'},
        { name: 'Fernando Moreira'},
        { name: 'Lívia Oliveira'},
        { name: 'Yuri Severino'},
      ]
})
}
</script>