<template>
	<div class="ads">
		<agile
			:autoplay="true"
			:autoplay-speed="5000"
			:pause-on-hover="true"
			:speed="500"
		>
			<div class="slide" >
				<img
					src="~/static/images/1.jpg"
					alt="kitchen"
					class="image"
				>
			</div>
			<div class="slide">
				<img
					src="~/static/images/2.jpg"
					alt="kitchen"
					class="image"
				>
			</div>
			<div class="slide">
				<img
					src="~/static/images/3.jpg"
					alt="kitchen"
					class="image"
				>
			</div>
		</agile>

		<div class="content-wrapper">
			<div class="content">
				<p class="title">
					{{getAdsText.aboutUs}}
				</p>
				<a href="#cooperation" class="button">
					{{ getButtonText.contactUs }}
				</a>
			</div>
		</div>
	</div>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: "Ads",
	computed: {
		...mapGetters(['getAdsText', 'getButtonText']),
	},
	methods: {
		logger(e) {
			console.log(e.target)
		}
	}
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";
@import "styles/components/imports/breakpoints";

.ads {
	.content-wrapper {
		background: $purpleOP86;
		width: 50vw;
		height: $adsHeightWeb;
		position: absolute;
		top: 8.125em;
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-left: 1em;

		@include media-breakpoint-down($middle) {
			height: $adsHalfHeight;
			justify-content: flex-start;
		}

		@include media-breakpoint-down($small) {
			width: 100%;
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 22.375em;
			margin-right: 3em;

			@include media-breakpoint-down($middle) {
				height: 100%;
				margin-right: 1em;
				justify-content: center;
			}

			.button {
				@include media-breakpoint-down($middle) {
					position: absolute;
					bottom: -1em;
				}
			}

			.title {
				font-family: $loadedFamilyMedium;
				font-size: 2.25em;
				line-height: 1.35em;
				color: $white;
				max-width: 14em;

				@include media-breakpoint-down($middle) {
					font-size: 2em;
				}
			}
		}
	}

	.agile{
		width: 100%;
		height: $adsHeightWeb;
		position: relative;
		background: $purpleOP86;

		@include media-breakpoint-down($middle) {
			height: $adsHalfHeight;
		}

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

			@include media-breakpoint-down($max-width) {
				display: none;
			}
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
				z-index: 4;
				position: absolute;
				top: 0;
			}

			.image {
				object-fit: cover;
				height: $adsHeightWeb;
				width: 100%;

				@include media-breakpoint-down($middle) {
					height: $adsHalfHeight;
				}
			}
		}
	}
}

</style>
