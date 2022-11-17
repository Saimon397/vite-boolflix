<template>
  <header class="sticky-top">
    <HeaderComponent />
  </header>
  <main class="mt-5">
    <MainComponent />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import { store } from './data/store';

export default {
  data() {
    return {
      store,
    }
  },
  components: { HeaderComponent, MainComponent }
}
</script>

<style lang="scss" scoped>

</style>
