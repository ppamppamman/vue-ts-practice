<template>
  <div>
    <h1>hello!!</h1>
    <p>quizId : {{$route.params.quizId}}</p>
  </div>
</template>

<script lang="ts">

@Component
export default class Show extends QuizView {
  @Prop() private msg!: string;
}

</script>
