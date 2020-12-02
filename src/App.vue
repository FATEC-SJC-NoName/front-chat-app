<template>
  <v-app style="background-color:#EEEEEE">



    <router-view>  </router-view>
 
  
 
  </v-app>
</template>

<style>
.scroll {
  overflow-y: scroll;
  max-height: 65%;
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App"
})
</script>