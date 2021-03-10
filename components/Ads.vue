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
		<div class="content-wrapper">
			<div class="content">
				<p class="title">
					{{getAdsText.aboutUs}}
				</p>
				<a href="" class="button">{{ getButtonText.contactUs }}</a>
			</div>
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
		...mapGetters(['getAdsText', 'getButtonText']),
	},
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";

	.content-wrapper {
		background: $purpleOP86;
		width: 50vw;
		height: 39.125em;
		position: absolute;
		top: 8.125em;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 22.375em;
			margin-right: 3em;

			.title {
				font-family: $loadedFamilyMedium;
				font-size: 2.25em;
				line-height: 1.35em;
				color: $white;
				max-width: 14em;
			}

			.button {
				background: $white;
				width: 13em;
				padding: 0 0.75em;
				color: $purple;
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 2.75em;
				text-decoration: none;
				text-transform: uppercase;
				position: relative;

				&:before {
					content: '';
					background: url('/icon/arrow.svg') center no-repeat;
					width: 2em;
					height: 1em;
					position: absolute;
					right: 0.75em;
					top: 50%;
					transform: translateY(-0.5em);
				}

				&:hover {
					text-decoration: underline;
				}

				&:visited {
					color: $purple;
				}
			}
		}
	}

	.agile{
		width: 100%;
		height: 39.125em;
		position: relative;
		background: $purpleOP86;

		&__nav-button {
			background: transparent;
			border: none;
			color: $whiteOP28;
			cursor: pointer;
			font-size: 24px;
			height: 100%;
			position: absolute;
			top: 0;
			transition-duration: .3s;
			width: 80px;
			z-index: 4;

			&:hover {
				background-color: rgba(#000, .3);
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
			transform: translate(-620%, -2600%);
			display: flex;
			justify-content: space-between;
			z-index: 4;
		}


		&__dot {
			margin: 0 10px;
			position: relative;

			button {
				border: none;
				background-color: $whiteOP28;
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

			&:before {
				content: '';
				position: absolute;
				width: 1.5em;
				height: 1.5em;
				top: -6px;
				left: -6px;
			}

			&--current, &:hover {
				button {
					background-color: $white;
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
				height: 39.125em;
				width: 100%;
			}
		}
}

</style>
