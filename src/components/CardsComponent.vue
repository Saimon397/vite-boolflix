<template>
  <Transition name="transitiontitle">
    <div v-show="list.length" class="TitleOne px-5">{{ CatTitle }}</div>
  </Transition>
  <div class="scroll d-flex align-items-center py-3">
    <TransitionGroup name="transition">
      <CardComponent v-for="(item, index) in list" :key="index" :card="item" />
    </TransitionGroup>
  </div>
</template>

<script>
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';
import { store } from '../data/store';

export default {
  name: 'CardsComponent',

  data() {
    return {
      store,
      list: []
    }
  },

  components: {
    CardComponent,
  },

  watch: {
    'store.clicker'() {
      this.getApi()
    }
  },

  props: ['end'],

  methods: {
    getApi() {
      const url = store.apiUrl + this.end;
      axios.get(url, store.options).then((res) => {
        this.list = [...res.data.results];
      })
    }
  },

  computed: {
    CatTitle() {
      if (this.end.includes('tv')) {
        return '📺 TV SHOW...'
      } else if (this.end.includes('movie')) {
        return '🎥 MOVIE...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.TitleOne {
  font-weight: bold;
  font-size: 50px;
  color: $coltext;
}

.scroll {
  margin-bottom: 50px;
  height: 300px;
  overflow: auto;
  display: flex;
}

.transition-enter-active,
.transition-leave-active {
  transition: all 0.5s ease;
}

.transition-enter-from,
.transition-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.transitiontitle-enter-active,
.transitiontitle-leave-active {
  transition: all 0.5s ease;
}

.transitiontitle-enter-from,
.transitiontitle-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
