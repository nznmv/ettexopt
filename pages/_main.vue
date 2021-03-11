<template>
	<div>
		<Header/>
		<Ads/>
		<Brands/>
		<Advantages/>
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
		<a href="tel:11111" class="callback"></a>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

	export default {
		name: "_main",
		methods: {
			...mapActions(['setTextConfig']),
		},
	}
</script>

<style lang="scss" scoped>
	@import "styles/components/imports/variables";

	.dot {
		height: 300px;
		background: antiquewhite;

		&:first-child {
			background: white;
		}
	}

	.callback {
		width: 4em;
		height: 4em;
		border-radius: 3em;
		background: $purpleLight;
		position: fixed;
		bottom: 3em;
		right: 3em;
		cursor: pointer;
		mix-blend-mode: multiply;
		z-index: 99;

		&:after {
			content: '';
			background: url('/icon/callback.svg') center no-repeat;
			width: 3em;
			height: 3em;
			position: absolute;
			left: 0.5em;
			top: 0.5em;
			transition: 0.3s;
		}

		&:hover {
			background: $purpleMedium;
			mix-blend-mode: hard-light;

			&:after {
				transform: rotate(-90deg);
			}
		}
	}
</style>
