<template>
  <nav class="navbar navbar-expand-lg bg-gradient sticky-top">
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
        <input class="form-control bg-dark me-3 border-dark w-50" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn text-white border-dark btn-dark btn-outline-secondary" type="submit"><img class="logo2"
            src="/img/Netflix-Logo.wine.svg" alt=""></button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

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