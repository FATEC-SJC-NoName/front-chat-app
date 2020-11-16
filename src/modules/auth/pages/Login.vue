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
/*import { login, me, createActivity } from "@/services/services"; */

import { mapActions } from 'vuex'


export default {
  data: () => ({
    form: {
      username: "",
      password: "",
    },
  }),

  methods: {
    ...mapActions('auth', ['ActionDoLogin']),  
    async submit() {      
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        
        alert(err.data ? err.data.message : 'Não foi possível fazer login' )
      }
     
    },
  },
  /* methods: {
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
  } */
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


