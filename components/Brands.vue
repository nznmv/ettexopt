<template>
	<div class="brands-wrapper" id="aboutProducts">
		<div class="brands">
			<div class="brandsAbout">
				<h2 class="title">{{getBrandsText.title}}</h2>
				<p class="subtitle">{{getBrandsText.about}}</p>
			</div>
			<div class="brandsLinks">
				<a href="#magio" class="linkMagio"></a>
				<a href="#satori" class="linkSatori"></a>
				<a href="#conbrio" class="linkConbrio"></a>
				<div class="linkVitek"></div>
			</div>
		</div>
		<BrandsMagio/>
		<BrandsSatori/>
		<BrandsConbrio/>
	</div>

</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		name: "Brands",
		computed: {
			...mapGetters(['getBrandsText']),
		},
	}
</script>

<style lang="scss">
@import "styles/components/imports/variables";
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

			.brandsAbout {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: $purple;
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.4em;

				.title {
					font-family: $loadedFamilyBold;
					font-size: 2em;
				}

				.subtitle {
					max-width: 23em;
				}
			}

			.brandsLinks {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				height: 5em;

				.linkSatori {
					width: 13em;
					height: 3em;
					background: url('~/static/images/satori.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
				}
				.linkMagio {
					width: 13em;
					height: 4em;
					background: url('~/static/images/magio.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
				}
				.linkConbrio {
					width: 13em;
					height: 5em;
					background: url('~/static/images/conbrio.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
				}
				.linkVitek {
					width: 13em;
					height: 3em;
					background: url('~/static/images/vitek.svg') center no-repeat;
					background-size: 100%;
					cursor: pointer;
				}
			}
		}
	}
</style>
