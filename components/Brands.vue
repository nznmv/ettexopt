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
				<a class="linkVitek"></a>
				<a href="#wellDone" class="linkWellDone"></a>
				<a href="#seaBreeze" class="linkSeaBreeze"></a>
			</div>
		</div>
		<BrandsMagio :numberSlides="slideNumber"/>
		<LazyBrandsSatori :numberSlides="slideNumber"/>
		<LazyBrandsSeaBreeze :numberSlides="slideNumber"/>
		<LazyBrandsConbrio :numberSlides="slideNumber"/>
		<LazyBrandsWellDone :numberSlides="slideNumber"/>
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
			padding:  0 1em;

			.brandsAbout {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: $purple;
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.4em;
				flex-wrap: wrap;
				margin-top: 50px;

				.title {
					font-family: $loadedFamilyBold;
					font-size: 2em;

					@include media-breakpoint-down($small) {
						font-size: 1.35em;
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

					@include media-breakpoint-down($small) {
						font-size: 0.85em;
						text-align: center;
					}
				}
			}

			.brandsLinks {
				display: flex;
				justify-content: space-evenly;
				flex-wrap: wrap;
				align-items: flex-end;
				margin: 75px 0 50px 0;

				&>a {
					width: 13em;
					margin: 20px 10px;
					background-size: 100% !important;
					cursor: pointer;
					@include media-breakpoint-down($desktop-breakpoint) {
						background-size: 75%;
					}
					@include media-breakpoint-down($small) {
						margin: 15px 10px;
						background-size: 100%;
					}
				}

				@include media-breakpoint-down($desktop-breakpoint) {
					margin: 50px 0 25px 0;
				}

				@include media-breakpoint-down($small) {
					margin: 25px 0 25px 0;
				}

				.linkSatori {
					height: 3em;
					background: url('~/static/images/satori.svg') center no-repeat;
				}
				.linkMagio {
					height: 4em;
					background: url('~/static/images/magio.svg') center no-repeat;
				}
				.linkConbrio {
					height: 5em;
					background: url('~/static/images/conbrio.svg') center no-repeat;
				}
				.linkVitek {
					height: 3.5em;
					background: url('~/static/images/vitek.svg') center no-repeat;
				}

				.linkWellDone {
					height: 5em;
					background: url('~/static/images/wellDone.png') center no-repeat;
				}

				.linkSeaBreeze {
					height: 3em;
					background: url('~/static/images/seaBreeze.svg') center no-repeat;
					align-self: flex-start;
				}
			}
		}
	}
</style>
