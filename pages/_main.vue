<template>
	<div class="main">
		<LazyHeader/>
		<LazyAds/>
		<LazyBrands/>
		<LazyAdvantages/>
		<Video/>
		<LazyCooperation/>
		<LazyFooter/>
		<a href="tel:+380677286148" class="callback"></a>
	</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

	export default {
		name: "_main",
		computed: {
			...mapState(['modal_show']),
		},
		methods: {
			...mapActions(['setTextConfig']),
		},
	}
</script>

<style lang="scss" >
	@import "styles/components/imports/variables";

	.blockTitle {
		color: $purple;
		font-family: $loadedFamilyBold;
		font-size: 3em;
		line-height: 1.4em;

		&White {
			color: $white;
			font-family: $loadedFamilyBold;
			font-size: 3em;
			line-height: 1.4em;
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
			background: url('~/static/icon/callback.svg') center no-repeat;
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
