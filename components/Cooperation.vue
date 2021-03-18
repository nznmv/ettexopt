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

	.coop-wrapper {
		width: 100vw;
		height: 39em;
		background: $purpleBackground;


		.coop {
			max-width: 68.75em;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;

			.coopText {
				width: 50%;

				.coopTextParagraph {
					color: $white;
					font-family: $loadedFamilyRegular;
					font-size: 1.5em;
					line-height: 1.5em;
					text-align: left;
					max-width: 19em;
					margin-top: 2em;
				}

				.icon-logoWhite {
					@include icon-create (logo-white, 10em);
					position: absolute;
					bottom: -4.8em;
					left: 0;
				}
			}

			.coopForm {
				width: 50%;
			}
		}
	}

</style>
