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
      console.log("paulo")
      const repo = new ChatRepository();

      // const model = repo.fetchAll();
      const model = await repo.createChat({"name": "chat-1", "isActive": true});

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
