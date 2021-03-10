<template>
	<div>
		<agile>
			<div class="slide">
				<img src="/images/adsBackground.jpg" alt="kitchen" class="image">
			</div>
			<div class="slide">
				<img src="/images/adsBackground.jpg" alt="kitchen" class="image">
			</div>
			<div class="slide">
				<img src="/images/adsBackground.jpg" alt="kitchen" class="image">
			</div>
		</agile>
		<div class="content">
			<p class="">
				{{getAdsText.aboutUs}}
			</p>
		</div>
	</div>

</template>

<script>
import { VueAgile } from 'vue-agile'
import {mapGetters} from 'vuex';

export default {
	name: "Ads",
	components: {
		agile: VueAgile
	},
	computed: {
		...mapGetters(['getAdsText']),
	},
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";

	.content {
		background: $purpleOP86;
		width: 50vw;
		height: 42.5em;
		position: absolute;
		top: 8.125em;
		z-index: 3;
	}
	.agile{
		width: 100%;
		height: 42.5em;
		position: relative;
		background: $purpleOP86;
		z-index: 1;

		//&:before {
		//	content: '';
		//	width: 50%;
		//	height: 100%;
		//	background: $purpleOP86;
		//	position: absolute;
		//	top: 0;
		//	left: 0;
		//	z-index: 2;
		//}

		&__nav-button {
			background: transparent;
			border: none;
			color: #000;
			cursor: pointer;
			font-size: 24px;
			height: 100%;
			position: absolute;
			top: 0;
			transition-duration: .3s;
			width: 80px;

			&:hover {
				background-color: rgba(#000, .5);
				opacity: 1;
			}
			&--prev {
				left: 0;
			}

			&--next {
				right: 0;
			}
		}

		&__dots {
			bottom: 10px;
			left: 50%;
			position: absolute;
			transform: translateX(-50%);
		}


		&__dot {
			margin: 0 10px;

			button {
				background-color: #362D5F;
				border: 1px solid #fff;
				border-radius: 50%;
				cursor: pointer;
				display: block;
				height: 10px;
				font-size: 0;
				line-height: 0;
				margin: 0;
				padding: 0;
				transition-duration: .3s;
				width: 10px;
			}

			&--current, &:hover {
				button {
					background-color: #362D5F;
				}
			}
		}

		.slide {
			display: block;
			height: 100%;
			object-fit: contain;
			width: 100%;

			.content {
				max-width: 68.75em;
				height: 100%;
				margin:0 auto;
				border: 1px solid red;
				z-index: 4;
				position: absolute;
				top: 0;
			}

			.image {
				object-fit: cover;
				height: 42.5em;
				width: 100%;
			}
		}
}

</style>
