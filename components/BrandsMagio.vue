<template>
	<div class="magio" id="magio">
			<div class="magioTitle">
				<p class="magioSubtitle">{{getBrandsText.magio}}</p>
				<a class="linkMagio"></a>
			</div>
			<agile
				:slidesToShow="3"
				:autoplay="true"
				:autoplay-speed="7000"
				:pause-on-hover="true"
				:speed="700"
			>
				<div class="slide">
					<img src="~/static/images/magio/1.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/2.JPG" alt="product photo">
				</div>
				<div class="slide">
					<img src="~/static/images/magio/3.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/4.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/5.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/6.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/7.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/8.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/9.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/10.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/11.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/12.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/13.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/14.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/15.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/16.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/17.JPG" alt="product photo" >
				</div>
				<div class="slide">
					<img src="~/static/images/magio/18.JPG" alt="product photo" >
				</div>
			</agile>
		</div>
</template>

<script>
	import {mapGetters} from 'vuex';

export default {
	name: "BrandsMagio",
	computed: {
		...mapGetters(['getBrandsText']),
	},
}
</script>

<style lang="scss">
@import "styles/components/imports/variables";

.magio {
	max-width: 68.75em;
	margin: 0 auto;
	padding-bottom: 3em;
	border-bottom: 2px solid $purpleMedium ;

	.magioTitle {
		height: 18em;
		padding-bottom: 5em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.magioSubtitle {
			font-size: 1.5em;
			line-height: 1.4em;
			max-width: 50%;
		}

		.linkMagio {
			width: 13em;
			height: 4em;
			background: url('~/static/images/magio.svg') center no-repeat;
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
				object-fit: cover;
				height: 100%;
				width: 100%;
				border-right: 2px solid $white;
				border-left: 2px solid $white;
			}
		}
	}
}

</style>
