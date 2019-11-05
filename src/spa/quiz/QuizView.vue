<template>
  <div class="quiz_lists">
    <b-container class="bv-example-row">
      <div>
        <b-form-row>
          <!-- 컴포넌트 QuizList, QuizShow children routing -->
          <router-view></router-view>
          <!-- 컴포넌트 QuizList, QuizShow children routing-->
        </b-form-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import QuizList from "@/spa/quiz/components/QuizList.vue";
//import QuizShow from "@/spa/quiz/components/QuizShow.vue";

export default {
  name: "quiz_view",
  components: {
    //QuizList,
  },
  data:{
    quiz_id: "asdf"
  }
};
</script>
