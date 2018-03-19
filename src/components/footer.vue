<template>
    <footer class="footer">
        <span class="todo-count">
            <strong> {{ left }} </strong> left
        </span>
        <ul class="filters">
            <li><a href="#/all" v-bind:class="{selected: $store.state.activeFilter == 'all'}">All</a></li>
            <li><a href="#/active" v-bind:class="{selected: $store.state.activeFilter == 'active'}">Active</a></li>
            <li><a href="#/completed" v-bind:class="{selected: $store.state.activeFilter == 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show="todos.length > left" v-on:click="clear">
            Clear completed
        </button>
    </footer>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations(['clear', 'changeFilter']),
        },
        computed: {
            ...mapGetters(['todos', 'left']),
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.changeFilter(location.hash.substr(2))
            })
        }
    };
</script>