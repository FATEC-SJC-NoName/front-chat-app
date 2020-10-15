<template>
  <div id="app">
    <div class="columns">

      <div class="column">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Chat NoName" />
      </div>

      <fab
        :position="position"
        position-type="absolute"
        :bg-color="bgColor"
        :actions="fabActions"
        main-icon="account_circle"
        @dashboard="dashboard"
        @chatBox="chatBox"
        start-opened="false"
        toggle-when-away="true"
      ></fab>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue"

@Component({
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      bgColor: '#009900',
      position: 'bottom-left',
      fabActions: [
        {
          icon: 'dashboard',
          name: 'dashboard',
        },
        {
          icon: 'chat',
          name: 'chatBox',
        },
      ],
    }
  },
  methods: {
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
