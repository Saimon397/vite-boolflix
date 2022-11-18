import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    genresUrl: 'https://api.themoviedb.org/3/genre/movie/list',
    account: 'https://ia903404.us.archive.org/31/items/profiles_202104/dog.png',
    accountsPic: [
        'https://ia903404.us.archive.org/31/items/profiles_202104/dog.png',
        'https://ia903404.us.archive.org/31/items/profiles_202104/hero.png',
        'https://ia803404.us.archive.org/31/items/profiles_202104/monster.png',
        'https://ia803404.us.archive.org/31/items/profiles_202104/penguin.png',
        'https://ia903404.us.archive.org/31/items/profiles_202104/robot.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU33Io5Mgoxj4Hil4F0ctBZUBEXhoQd9fYEg&usqp=CAU',
        'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
    ],
    listGenres: [],
    Movie: [],
    TvShow: [],

    options: {
        params: {
            api_key: '455e5bd1843bfb8a2f8bc875c4d64fa2',
            query: ''
        }
    },
    clicker: true,
    snip(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    },
});