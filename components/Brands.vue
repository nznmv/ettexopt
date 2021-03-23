<template>
	<div class="brands-wrapper" id="aboutProducts">
		<div class="brands">
			<div class="brandsAbout">
				<h2 class="title">{{getBrandsText.title}}</h2>
				<div>
					<p class="subtitle">{{getBrandsText.firstAbout}}</p>
					<p class="subtitle">{{getBrandsText.about}}</p>
				</div>
			</div>
			<div class="brandsLinks">
				<a href="#magio" class="linkMagio"></a>
				<a href="#satori" class="linkSatori"></a>
				<a href="#conbrio" class="linkConbrio"></a>
				<div class="linkVitek"></div>
			</div>
		</div>
		<BrandsMagio :numberSlides="slideNumber"/>
		<LazyBrandsSatori :numberSlides="slideNumber"/>
		<LazyBrandsConbrio :numberSlides="slideNumber"/>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		name: "Brands",
		computed: {
			...mapGetters(['getBrandsText']),
			slideNumber() {
				switch (true) {
					case(window.screen.width >= 992): return 3;
					case(window.screen.width >= 768): return 2;
					case(window.screen.width <= 768): return 1;
				}

			}
		},
	}
</script>

<style lang="scss">
@import "styles/components/imports/variables";
@import "styles/components/imports/breakpoints";

	.brands-wrapper {
		color: $purple;
		font-family: $loadedFamilyRegular;

		.brands {
			max-width: 68.75em;
			margin: 0 auto;
			border-bottom: 2px solid $purpleMedium;
			height: 27.7em;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			padding:  0 1em;

			@include media-breakpoint-down($desktop-breakpoint) {
				height: 35em;
			}

			@include media-breakpoint-down($small) {
				height: 30em;
			}

			.brandsAbout {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: $purple;
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.4em;
				flex-wrap: wrap;

				.title {
					font-family: $loadedFamilyBold;
					font-size: 2em;

					@include media-breakpoint-down($small) {
						font-size: 1.7em;
					}

					@include media-breakpoint-down($desktop-breakpoint) {
						margin-bottom: 1em;
					}
				}

				.subtitle {
					max-width: 22em;

					@include media-breakpoint-down($desktop-breakpoint) {
						max-width: 100%;
					}
				}
			}

			.brandsLinks {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				align-items: flex-end;
				height: 5em;

				@include media-breakpoint-down($desktop-breakpoint) {
					justify-content: space-around;
					height: 10em;
				}
				@include media-breakpoint-down($small) {
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					height: 25em;
					display: none;
				}

				.linkSatori {
					width: 13em;
					height: 3em;
					background: url('~/static/images/satori.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
					margin:  0.5em 1em;
					@include media-breakpoint-down($desktop-breakpoint) {
						background-size: 75%;
					}
					@include media-breakpoint-down($small) {
						background-size: 100%;
					}
				}
				.linkMagio {
					width: 13em;
					height: 4em;
					background: url('~/static/images/magio.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
					margin:  0.5em 0;
					@include media-breakpoint-down($desktop-breakpoint) {
						background-size: 75%;
					}

					@include media-breakpoint-down($small) {
						background-size: 100%;
					}
				}
				.linkConbrio {
					width: 13em;
					height: 5em;
					background: url('~/static/images/conbrio.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
					margin:  0.5em 1em;
					@include media-breakpoint-down($desktop-breakpoint) {
						background-size: 75%;
						height: 4em;
					}
					@include media-breakpoint-down($small) {
						background-size: 100%;
					}
				}
				.linkVitek {
					width: 13em;
					height: 3em;
					background: url('~/static/images/vitek.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
					margin:  0.5em 0;
					@include media-breakpoint-down($desktop-breakpoint) {
						background-size: 75%;
					}
					@include media-breakpoint-down($small) {
						background-size: 100%;
					}
				}
			}
		}
	}
</style>
