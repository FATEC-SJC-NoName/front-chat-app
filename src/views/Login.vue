<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.username"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="form.password"
              class="form-control"
              placeholder="Senha"
            />
          </div>
          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
    </div>
  </form>
</template>


<script>

import { mapActions } from "vuex";

export default {
  name: "Login",

  components: {},

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
    };
  },

  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
          await this.LogIn(this.form);        
          this.$router.push({name: "Home"})
          this.showError = false
      } catch (err) {
         
          this.showError = true
      }
    },
  },
};
</script>


<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 45%;
  }
}
</style>>


