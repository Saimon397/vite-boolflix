import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    imgUrl: 'https://image.tmdb.org/t/p/w300/',
    genresUrl: 'https://api.themoviedb.org/3/genre/movie/list',
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