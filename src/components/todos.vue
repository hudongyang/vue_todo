<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
        <label for="toggle-all"></label>
        <ul class="todo-list" v-cloak>
            <li class="todo" v-for="todo in filterTodos" v-bind:class="{completed:todo.completed,editing: todo==editingTodo}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.completed">
                    <label v-on:dblclick="editTodo(todo)">{{ todo.title }}</label>
                    <button class="destroy" v-on:click="remove(todo)"></button>
                </div>
                <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editingTodo" v-on:blur="doneEdit(todo)" v-on:keyup.enter="doneEdit(todo)" v-on:keyup.esc="cancelEdit(todo)">
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        data() {
            return {
                editingTodo: null,
                beforeEditCache: '',
                filters: {
                    all: function () {
                        return true;
                    },
                    active: function (todo) {
                        return !todo.completed;
                    },
                    completed: function (todo) {
                        return todo.completed;
                    }
                }
            }
        },
        methods: {
            ...mapMutations(['remove']),
            editTodo(todo) {
                this.editingTodo = todo;
                this.beforeEditCache = todo.title;
            },
            doneEdit(todo) {
                if(!this.editingTodo) {
                    return;
                }
                this.editingTodo = null;
            },
            cancelEdit(todo) {
                this.editingTodo = null;
                todo.title = this.beforeEditCache;
            }
        },
        computed: {
            ...mapGetters(['todos', 'left']),
            allDone: {
                get() {
                    return this.left === 0;
                },
                set(value) {
                    this.$store.commit('allDone', value)
                }
            },
            filterTodos() {
                let todos = this.todos.filter(this.filters[this.$store.state.activeFilter]);
                return todos;
            }
        },
        directives: {
            'todo-focus'(el) {
                if(!el.value) {
                    return;
                }
                
                setTimeout(function() {
                    el.focus();
                }, 0);
            }
        }
    };
</script>