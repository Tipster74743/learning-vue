<template>
  <div class="about">
    <h1>Hello, {{ name }}</h1>

    <p>This is an about page</p>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
  } from 'vue-property-decorator';

  @Component
  export default class About extends Vue {

  }
</script>
