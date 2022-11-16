import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/movie/550?api_key=455e5bd1843bfb8a2f8bc875c4d64fa2',
    listMovie: [],
    listTvShow: [],

    options: {
        params: {
            api_key: '455e5bd1843bfb8a2f8bc875c4d64fa2',
            query: ''
        }
    }


});