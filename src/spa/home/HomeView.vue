<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/spa/home/components/HelloWorld.vue";
import Game from "@/spa/game/components/Game.vue";

export default {
  name: "home_view",
  components: {
    HelloWorld
  }
};

</script>