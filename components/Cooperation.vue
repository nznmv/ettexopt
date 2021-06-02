<template>
	<div class="coop-wrapper" id="cooperation">
		<div class="coop">
			<div class="coopText">
				<h2 class="blockTitleWhite"> {{getCoopText.title}}</h2>
				<p class="coopTextParagraph">{{getCoopText.text}}</p>
				<i class="icon-logoWhite"></i>
			</div>
			<div v-if="showForm" class="coopForm">
				<Form/>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
name: "Cooperation",
	data() {
		return {
			showForm: false,
		}
	},
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
		height: 22em;
		background: $purpleBackground;

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
				width: 80%;
				margin-bottom: 4em;

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
					width: 100%;
					margin-top: 1.25em;

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
