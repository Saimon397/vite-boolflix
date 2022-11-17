<template>
  <div>
    <CardsComponent v-for="(el, i) in list_end" :key="i" :end="el" />
  </div>
</template>

<script>
import CardsComponent from '../components/CardsComponent.vue'

export default {
  data() {
    return {
      list_end: ['/search/movie', '/search/tv']
    }
  },
  components: {
    CardsComponent,
  }
}
</script>

<style lang="scss" scoped>

</style>
