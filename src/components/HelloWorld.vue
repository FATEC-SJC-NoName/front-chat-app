<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fetchAllChats">click</button>
  </div>
</template>

<script>
import { ChatRepository } from "../repositories"

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    async fetchAllChats() {
      console.log("hello")
      const repo = new ChatRepository();

      const model = await repo.fetchAllChats();

      console.log(model)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
