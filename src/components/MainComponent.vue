<template>
  <div>
    <CardsComponent v-for="(el, i) in list_end" :key="i" :end="el" v-if="store.options.params.query" />
    <CardsComponent v-for="(el, j) in listTrend" :key="j" :end="el" v-else />
  </div>
</template>

<script>
import { store } from '../data/store';
import CardsComponent from '../components/CardsComponent.vue'

export default {
  data() {
    return {
      list_end: ['/search/movie', '/search/tv'],
      listTrend: ['/trending/movie/week', '/trending/tv/week'],
      store,
    }
  },
  components: {
    CardsComponent,
  }
}
</script>

<style lang="scss" scoped>

</style>
