import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        activeFilter: 'all'
    },
    mutations: {
        add(state, todo) {
            todo.id = state.todos.length
            state.todos.push(todo)
        },
        allDone(state, value) {
            state.todos.forEach(todo => todo.completed = value)
        },
        remove(state, delTodo) {
            state.todos = state.todos.filter(todo => todo !== delTodo)
        },
        clear(state) {
            state.todos = state.todos.filter(todo => !todo.completed)
        },
        changeFilter(state, filter) {
            state.activeFilter = filter
        }
    },
    getters: {
        todos(state) {
            return state.todos
        },
        left(state) {
            return state.todos.filter(todo => !todo.completed).length
        }
    }
})

