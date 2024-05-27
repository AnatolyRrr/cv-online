<template>
  <q-scroll-area style="height: 100vh; max-width: 100vw;">
    <main>
      <MyHeader />

      <div class="line" />

      <AboutMe />

      <WorkExperience />
    </main>
  </q-scroll-area>
</template>

<script setup lang="ts">
import MyHeader from '@/components/MyHeader.vue';
import AboutMe from '@/components/AboutMe.vue';
import WorkExperience from '@/components/WorkExperience.vue';
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: $white;
  padding: 1.2rem;

  @include MIN_768 {
    padding: 1.6rem;
    gap: 12px;
  }

  @include MIN_1024 {
    width: 1024px;
    margin: auto;
    padding: 2rem;
    gap: 16px;
  }
}

.line {
  background-color: $greySmoke;
  height: 2px;
  width: 100%;
}
</style>
