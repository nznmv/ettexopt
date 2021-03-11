<template>
	<div class="conbrio" id="conbrio">
		<div class="conbrioTitle">
			<p class="conbrioSubtitle">{{getBrandsText.conbrio}}</p>
			<a class="linkConbrio"></a>
		</div>
		<agile
			:slidesToShow="3"
			:autoplay="true"
			:autoplay-speed="7000"
			:pause-on-hover="true"
			:speed="700"
		>
			<div class="slide">
				<img src="/images/conbrio/1.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/2.JPG" alt="product photo">
			</div>
			<div class="slide">
				<img src="/images/conbrio/3.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/4.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/5.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/6.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/7.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/8.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/10.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/11.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/12.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/13.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="/images/conbrio/14.JPG" alt="product photo" >
			</div>
		</agile>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

export default {
	name: "BrandsConbrio",
	computed: {
		...mapGetters(['getBrandsText']),
	},
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";

.conbrio {
	max-width: 68.75em;
	margin: 0 auto 7em auto;

	.conbrioTitle {
		height: 18em;
		padding-bottom: 2em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.conbrioSubtitle {
			font-size: 1.5em;
			line-height: 1.4em;
			max-width: 50%;
		}

		.linkConbrio {
			width: 13em;
			height: 100%;
			background: url('/images/conbrio.svg') center no-repeat;
			background-size: 100%;
		}
	}
	.agile{
		width: 100%;
		height: 16.8em;
		position: relative;

		&__nav-button {
			background: transparent;
			border: none;
			color: $darkPurple;
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
			max-height: 16.8em;
			width: 33.3%;
			object-fit: contain;

			& > img {
				object-fit: contain;
				height: 100%;
				width: 100%;
				border-right: 2px solid $white;
				border-left: 2px solid $white;
			}
		}
	}
}

</style>
