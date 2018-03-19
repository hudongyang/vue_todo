<template>
	<div>
		<section id="app" class="todoapp">
			<comp-head></comp-head>
			<comp-todos></comp-todos> 
			<comp-foot></comp-foot> 
		</section>
	</div>
</template>

<script>
import CompHead from '@/components/header'
import CompTodos from '@/components/todos'
import CompFoot from '@/components/footer'


export default {
	name: 'App',
    components: {
        CompHead,
        CompTodos,
        CompFoot
    }
}
</script>

<style src="todomvc-app-css/index.css"></style>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
