<template>
  <div  >
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
    <!-- <v-btn @click="login">login</v-btn>-->
  </div>
</template>
<script>
import { mapActions} from 'vuex';


export default {
  name: "Home",
  components: {},
  created: function(){
    this.getUserInfo()
  },
  methods:{
    ...mapActions(["getUserInfo"])
  },

};
</script>


