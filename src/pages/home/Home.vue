<template>
  <div>
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    <v-btn @click="login">login</v-btn>
  </div>
</template>
<script>


export default {
  data() {
    return {
      team: [
        { name: "Lerena Adriana" },
        { name: "Anderson da Silva" },
        { name: "Emily Godo" },
        { name: "Luiza Giovana" },
        { name: "Carolina Isabel" }
      ]
    };
  },

};
</script>
