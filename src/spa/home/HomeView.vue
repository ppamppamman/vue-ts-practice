<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
    <HelloWorld msg="테스트 Vue app입니다" />
    <HelloBootstrap />
    <RecommendQuiz />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/spa/home/components/HelloWorld.vue";
import HelloBootstrap from "@/spa/home/components/HelloBootstrap.vue";
import RecommendQuiz from "@/spa/home/components/RecommendQuiz.vue";

export default {
  name: "home_view",
  components: {
    HelloWorld,
    HelloBootstrap,
    RecommendQuiz
  }
};
</script>