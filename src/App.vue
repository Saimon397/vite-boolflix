<template>
  <header class="sticky-top">
    <HeaderComponent />
  </header>
  <main>
    <JumboComponent />
    <MainComponent />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import { store } from './data/store';

export default {
  data() {
    return {
      store,
    }
  },
  components: { HeaderComponent, MainComponent, JumboComponent }
}
</script>

<style lang="scss" scoped>

</style>
