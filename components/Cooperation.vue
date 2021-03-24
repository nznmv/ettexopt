<template>
	<div class="coop-wrapper" id="cooperation">
		<div class="coop">
			<div class="coopText">
				<h2 class="blockTitleWhite"> {{getCoopText.title}}</h2>
				<p class="coopTextParagraph">{{getCoopText.text}}</p>
				<i class="icon-logoWhite"></i>
			</div>
			<div class="coopForm">
				<Form/>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
name: "Cooperation",
	computed: {
		...mapGetters(['getCoopText']),
	}
}
</script>

<style lang="scss">
@import 'styles/components/imports/variables';
@import "styles/components/imports/breakpoints";

	.coop-wrapper {
		width: 100vw;
		height: 39em;
		background: $purpleBackground;

		@include media-breakpoint-down($max-width) {
			height: 50em;
		}

		@include media-breakpoint-down($desktop-breakpoint) {
			height: 60em;
		}

		@include media-breakpoint-down($middle) {
			height: 60em;
		}

		@include media-breakpoint-down($small) {
			height: 60em;
		}


		.coop {
			max-width: 68.75em;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			padding: 1em 1em 0;

			@include media-breakpoint-down($max-width) {
				flex-direction: column;
				justify-content: space-evenly;
			}

			.blockTitleWhite {
				@include media-breakpoint-down($small) {
					font-size: 2em;
					text-align: left;
				}
			}

			.coopText {
				width: 50%;

				@include media-breakpoint-down($max-width) {
					width: 100%;
					text-align: center;
				}

				.coopTextParagraph {
					color: $white;
					font-family: $loadedFamilyRegular;
					font-size: 1.5em;
					line-height: 1.5em;
					text-align: left;
					max-width: 19em;
					margin-top: 2em;

					@include media-breakpoint-down($max-width) {
						max-width: none;
					}

					@include media-breakpoint-down($middle) {
						font-size: 1em;
					}
				}

				.icon-logoWhite {
					@include icon-create (logo-white, 10em);
					position: absolute;
					bottom: -4.8em;
					left: 0;
					@include media-breakpoint-down($middle) {
						bottom: -6.8em;
					}
				}
			}

			.coopForm {
				width: 55%;

				@include media-breakpoint-down($max-width) {
					width: 100%;
					display: flex;
					justify-content: center;
				}
			}
		}
	}

</style>
