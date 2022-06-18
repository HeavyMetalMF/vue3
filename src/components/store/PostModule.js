import {createStore} from "vuex";
import axios from "axios";

export const PostModule = {
    state: () => ({
        posts: [],
        isLoading: false,
        selectedSort: '',
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
        ],
        searchPosts: '',
        page: 1,
        limit: 5,
        totalPage: 0,
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => a[state.selectedSort]?.localeCompare(b[state.selectedSort]));
        },
        searchedAndSortedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.includes(state.searchPosts));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsLoading(state, type) {
            state.isLoading = type;
        },
        setSelectedSort(state, sort) {
            state.selectedSort = sort;
        },
        setSortOptions(state, posts) {
            state.sortOptions = posts;
        },
        setSearchPosts(state, letters) {
            state.searchPosts = letters;
        },
        setPage(state, posts) {
            state.page = posts;
        },
        setLimit(state, posts) {
            state.limit = posts;
        },
        setTotalPage(state, pages) {
            state.totalPage = pages;
        },
    },
    actions: {
        async fetchPosts({state, commit}){
            try {
                commit('setIsLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data);
                console.log(response)
            }catch (e) {
                alert('Error')
            }finally {
                commit('setIsLoading', false);
            }
        }
    },
    namespaced: true,
}