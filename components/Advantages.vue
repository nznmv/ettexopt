<template>
	<div class="advantages-wrapper" id="advantages">
		<div class="advantages">
			<div class="advantagesHeader">
				<h2 class="advantagesTitle">{{getAdvantagesText.title}}</h2>
				<div class="advantagesDivider"></div>
			</div>
			<div class="advantagesMain">
				<div class="advantage">
					<i class="icon-heart"></i>
					<p>{{getAdvantagesText.text1}}</p>
				</div>
				<div class="advantage">
					<i class="icon-guard"></i>
					<p>{{getAdvantagesText.text2}}</p>
				</div>
				<div class="advantage">
					<i class="icon-location"></i>
					<p>{{getAdvantagesText.text3}}</p>
				</div>
				<div class="advantage">
					<i class="icon-part"></i>
					<p>{{getAdvantagesText.text4}}</p>
				</div>
				<div class="advantage">
					<i class="icon-rocket"></i>
					<p>{{getAdvantagesText.text5}}</p>
				</div>
			</div>
			<a href="" class="button">{{ getButtonText.contactUs }}</a>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
name: "Advantages",
	computed: {
		...mapGetters(['getAdvantagesText', 'getButtonText']),
	},
}
</script>

<style lang="scss">
	@import "styles/components/imports/variables";

	.advantages-wrapper {
		width: 100vw;
		background: $purpleBackground;
		height: 40em;

		.advantages {
			max-width: 68.75em;
			height: 100%;
			margin:0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;

			.advantagesHeader {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.advantagesTitle {
					font-family: $loadedFamilyBold;
					font-size: 3em;
					color: $white;
					line-height: 1em;
				}

				.advantagesDivider {
					width: 50%;
					height: 1px;
					background: $whiteOP28;

				}
			}

			.advantagesMain {
				display: flex;
				justify-content: space-evenly;
				flex-wrap: wrap;
				margin-top: 5em;

				.advantage {
					width: 33%;
					max-width: 17em;
					height: 11em;
					color: $white;
					font-family: $loadedFamilyRegular;
					font-size: 1.125em;
					line-height: 1.35em;
					text-align: center;

					display: flex;
					flex-direction: column;
					align-items: center;

					&:last-child {
						width: 25em;
						max-width: none;
					}
				}
			}

			.button {
				position: absolute;
				bottom: -1.4em;
				right: 0;
			}
		}
	}

	.icon {
		transition: 0.3s;

		&-heart{
			@include icon-create (heart, 4em);
		}

		&-callback{
			@include icon-create (callback, 4em);
		}

		&-guard{
			@include icon-create (guard, 4em);
		}

		&-location{
			@include icon-create (location, 4em);
		}

		&-part{
			@include icon-create (part, 4em);
		}

		&-rocket{
			@include icon-create (rocket, 4em);
		}
	}

</style>
