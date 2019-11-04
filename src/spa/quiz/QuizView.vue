<template>
  <div class="quiz_lists">
    <b-container class="bv-example-row">
      <b-form-row>
        <!-- 컴포넌트 QuizList -->
        <QuizList />
        <QuizList /> <!-- for test -->
        <!-- 컴포넌트 QuizList -->
      </b-form-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import QuizList from "@/spa/quiz/components/QuizList.vue"

export default {
  name: "quiz_view",
  components: {
    QuizList,
  }
};
</script>