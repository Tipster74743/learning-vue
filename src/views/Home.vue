<template>
  <div class="home">
    <Skills />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skills from '@/components/Skills.vue'; // @ is an alias to /src

@Component({
  components: {
    Skills,
  },
})
export default class Home extends Vue {}
</script>
