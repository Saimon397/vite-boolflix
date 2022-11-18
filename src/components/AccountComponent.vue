<template>
    <h1>Who wants to watch Boolflix ?</h1>
    <div class="profile d-flex container-fluid justify-content-center align-items-center">
        <img v-for="(el, i) in store.accountsPic" :key="i" :src="el" :alt="el" @click="select(el)">
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'AccountComponent',
    data() {
        return {
            store,
            user: 'https://ia903404.us.archive.org/31/items/profiles_202104/dog.png',
        }
    },
    methods: {
        select(el) {
            store.account = el;
            store.display = true;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

h1 {
    margin-top: 15rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 2px 2px black;
    color: $coltext;
}

.profile {
    margin-top: 3rem;

    img {
        width: 100px;
        height: 100px;
        border-radius: .5rem;
        margin: 1rem;

        &:hover {
            border: 5px solid rgb(183, 19, 6);
        }
    }

    select {
        background-color: rgba(27, 27, 27, 1);
        color: white;
        width: 100px;
    }
}
</style>