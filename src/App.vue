<template>
  <header class="sticky-top">
    <HeaderComponent v-if="store.display" />
  </header>
  <main>
    <AccountComponent v-if="!store.display" />
    <JumboComponent v-if="store.display" />
    <MainComponent v-if="store.display" />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import JumboComponent from './components/JumboComponent.vue';
import AccountComponent from './components/AccountComponent.vue';
import { store } from './data/store';

export default {
  data() {
    return {
      store,
    }
  },
  components: { HeaderComponent, MainComponent, JumboComponent, AccountComponent }
}
</script>

<style lang="scss" scoped>

</style>
