<template>
    <div class="profile container-fluid">
        <h1>Who wants to watch Boolflix ?</h1>
        <img :src="user" :alt="user" @click="select()">
        <select name="profile-pic" id="pic" v-model="user">
            <option v-for="(account, index) in store.accountsPic" :key="index" :value="account">Account: {{
                    index
            }}
            </option>
        </select>
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
        select() {
            store.account = this.user;
            store.display = true;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/mixins' as *;
@use '../assets/partials/variables' as *;

.profile {
    @include flexcol;
    align-items: center;
    margin-top: 15rem;

    h1 {
        text-transform: uppercase;
        text-shadow: 2px 2px black;
        color: $coltext;
    }

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