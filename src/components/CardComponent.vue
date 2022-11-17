<template>
    <div class="cardd px-3 position-relative col-4 mt-3" @mouseover="hover = true" @mouseleave="hover = false">
        <div class=" card-container">
            <Transition name="transition2">
                <div class="position-absolute info-hov" v-if="hover">
                    <div class="d-flex flex-column position-absolute votestars">
                        <i v-for="n in 5" class="fa-star" :class="(n <= vote) ? 'fa-solid' : 'fa-regular'"></i>
                    </div>
                    <div class="plotcont py-1 pe-3 overflow-auto h-75">
                        <h3>Trama..</h3>
                        <p class="info2">{{ card.overview }}</p>
                    </div>
                    <div class="flags position-absolute">
                        <img :src="flag" class="h-100">
                    </div>
                </div>
            </Transition>
            <img :src="(card.backdrop_path) ? `https://image.tmdb.org/t/p/w300/${card.backdrop_path}` : '/img/BOOLFLIX.png'"
                :alt="(!!card.title) ? card.title : card.name">
        </div>
        <div class="info-cont px-3 position-absolute d-flex align-content-center align-items-center gap-4">
            <div class="col-4">
                <p class="info text-white text-uppercase" v-html="(!!card.title) ? card.title : card.name"></p>
                <p class="info1" v-html="(!!card.original_title) ? card.original_title : card.original_name"></p>
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
            store,
            hover: false,
        }
    },
    computed: {
        collapse() {
            const cut = (!!this.card.title) ? this.card.title : this.card.name;
            return store.snip(cut, 10)
        },

        vote() {
            return Math.ceil(this.card.vote_average / 2)
        },

        flag() {
            let flag = this.card.original_language;
            if (flag == 'en') {
                flag = 'gb';
            }
            else if (flag == 'ja') {
                flag = 'jp';
            }
            else if (flag == 'zh') {
                flag = 'cn';
            }
            else if (flag == 'ko') {
                flag = 'kr';
            }
            let flagUp = flag.toUpperCase();
            const urlFlag = `https://www.countryflagicons.com/SHINY/64/${flagUp}.png`
            return urlFlag;
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
        transform-origin: top left;
    }

    .info2 {
        color: white;
        font-size: 0.8em;
    }

    .info-hov {
        border-radius: 3%;
        color: white;
        background-color: rgba(0, 0, 0, 0.434);
        height: 100%;
        width: 94%;
    }

    .info-hov i {
        color: gold;
    }
}

.votestars {
    top: 60px;
    left: 10px;
}

.plotcont {
    top: 10px;
    left: 50px;
    position: absolute;
}

.flags {
    top: 18px;
    left: 5px;
    width: 30px;
    height: 30px;
}

.info-cont {
    background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(27, 27, 27, 1) 40%);
    z-index: 1000;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 97%;
    border-radius: 3%;

    .info {
        font-weight: bold;
        font-size: 1.5em;
        margin-bottom: 0;
        margin-left: 10px;
    }

    .info1 {
        font-size: 0.7em;
        color: white;
        margin-left: 10px;
    }
}

.card-container {
    img {
        border-radius: 3%;
        height: 250px;
        width: 100%;
    }
}

.transition2-enter-active,
.transition2-leave-active {
    transition: all 0.5s ease;
}

.transition2-enter-from,
.transition2-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
</style>