<template>
  <div id="app" class="bg-gray">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/quiz">Quiz List</router-link> |
      <router-link to="/quiz_create">Quiz Create</router-link> |
      <router-link to="/my_quiz">My Quiz</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/stylesheets/app.scss";

</style>
