<script lang="ts">
	import { MyComponent } from './components';
	const name: string = 'World';
</script>

<style>
	:global(body) {
		padding: 0 !important;
		margin: 0 !important;
	}
	.wrapper {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
	}
</style>

<div class="wrapper">
	<MyComponent {name} />
</div>
