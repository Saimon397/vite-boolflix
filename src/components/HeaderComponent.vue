<template>
  <nav class="navbar navbar-expand-lg bg-gradient text-uppercase">
    <div class="container-fluid">
      <img class="logo" src="/img/BOOLFLIX.png" alt="logo-png">
      <div class="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-5">
          <a class="nav-link" href="#nogo">Home</a>
          <a class="nav-link" href="#nogo">Serie TV</a>
          <a class="nav-link" href="#nogo">Film</a>
          <a class="nav-link" href="#nogo">Originali</a>
          <a class="nav-link" href="#nogo">Aggiunti di recente</a>
          <a class="nav-link" href="#nogo">La mia lista</a>
        </div>
      </div>
      <form class="d-flex justify-content-end" role="search">
        <div><i class="fa-solid fa-magnifying-glass fs-1 mt-1 me-4 text-dark"></i></div>
        <input class="form-control bg-dark me-3 border-dark w-50 text-white" type="search" placeholder="Search..."
          v-model="research" @keyup.enter="search" aria-label="Search">
        <button class="btn text-white border-dark btn-dark btn-outline-secondary" type="submit"><img class="logo2"
            src="/img/Netflix-Logo.wine.svg" alt="logo-ntx" @click="search"></button>
      </form>
    </div>
  </nav>
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'HeaderComponent',
  data() {
    return {
      store,
      research: ''
    }
  },
  methods: {
    search() {
      store.options.params.query = this.research;
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.nav {
  z-index: 1000
}

.logo {
  width: 13%;
}

.logo2 {
  width: 70%;
}

button {
  width: 15%;
}

a {
  font-size: 1em;
  color: $coltext;

  &:hover {
    color: red;
  }
}
</style>