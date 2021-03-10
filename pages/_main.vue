<template>
	<div>
		<Header />
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
</template>

<script>
	import Header from '../components/Header';
	export default {
		name: "_main",
		components: {
			Header,
		}

}
</script>

<style scoped>
	.dot {
		height: 300px;
		background: antiquewhite;
	}
</style>
