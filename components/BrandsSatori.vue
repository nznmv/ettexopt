<template>
	<div class="satori" id="satori">
		<div class="satoriTitle">
			<p class="satoriSubtitle">{{getBrandsText.satori}}</p>
			<a class="linkSatori"></a>
		</div>
		<agile
			:slidesToShow="3"
			:autoplay="true"
			:autoplay-speed="7000"
			:pause-on-hover="true"
			:speed="700"
		>
			<div class="slide">
				<img src="~/static/images/satori/1.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/2.JPG" alt="product photo">
			</div>
			<div class="slide">
				<img src="~/static/images/satori/3.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/4.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/5.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/6.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/7.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/8.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/9.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/10.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/11.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/12.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/13.JPG" alt="product photo" >
			</div>
			<div class="slide">
				<img src="~/static/images/satori/14.JPG" alt="product photo" >
			</div>
		</agile>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

export default {
	name: "BrandsSatori",
	computed: {
		...mapGetters(['getBrandsText']),
	},
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";

.satori {
	max-width: 68.75em;
	margin: 0 auto;
	padding-bottom: 3em;
	border-bottom: 2px solid $purpleMedium;

	.satoriTitle {
		height: 18em;
		padding-bottom: 5em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.satoriSubtitle {
			font-size: 1.5em;
			line-height: 1.4em;
			max-width: 50%;
		}

		.linkSatori {
			width: 13em;
			height: 3em;
			background: url('~/static/images/satori.svg') center no-repeat;
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
