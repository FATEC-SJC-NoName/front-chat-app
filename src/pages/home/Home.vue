<template>
  <div>
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    <v-btn @click="login">login</v-btn>
  </div>
</template>
<script>
import { login, me, createActivity } from "@/services/services";

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
  methods: {
    async login() {
      const loginResponse = await login({
        username: "test@test.com",
        password: "1234"
      });
      const meResponse = await me({ jwt: loginResponse.jwt });
      await createActivity({
        title: "Nova atividade",
        userId: meResponse.id,
        description: "mais uma",
        isActive: true,
        jwt: loginResponse.jwt
      });
      const meResponse2 = await me({ jwt: loginResponse.jwt });
      console.log(meResponse2);
    }
  }
};
</script>
