<template>
    <div class="cardd px-3 position-relative col-4 mt-3">
        <div class="card-container">
            <img :src="(card.backdrop_path) ? `https://image.tmdb.org/t/p/w300/${card.backdrop_path}` : '/img/BOOLFLIX.png'"
                :alt="(!!card.title) ? card.title : card.name">
        </div>
        <div class="info-cont px-3 position-absolute w-100 d-flex align-content-center align-items-center gap-4">
            <div class="col-4">
                <p class="info text-white text-uppercase" v-html="(!!card.title) ? card.title : card.name"></p>
                <p class="info1" v-html="(!!card.original_title) ? card.original_title : card.original_name"></p>
            </div>
            <div class="col-5 flex-grow-1 py-1 overflow-auto h-75">
                <p class="info2">{{ card.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'CardComponent',
    props: ['card'],

    data() {
        return {
            store
        }
    },
    computed: {
        collapse() {
            const cut = (!!this.card.title) ? this.card.title : this.card.name;
            return store.snip(cut, 10)
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.cardd {
    background-color: rgba(27, 27, 27, 0);
    height: 100%;
    transition: 0.4s ease-in-out;


    &:hover {
        z-index: 10000;
        transform: scale(1.2);
        transform-origin: top;
    }
}

.info-cont {
    background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(27, 27, 27, 1) 40%);
    z-index: 1000;
    bottom: 0;
    left: 0;
    height: 100px;

    .info {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 0;
    }

    .info1 {
        font-size: 0.7em;
        color: white;
    }

    .info2 {
        color: white;
        font-size: 0.7em;
    }
}

.card-container {
    img {
        border-radius: 3%;
        height: 250px;
        width: 100%;
    }
}
</style>