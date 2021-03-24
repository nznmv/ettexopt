<template>
	<div class="footer-wrapper">
		<div class="footer" id="contacts">
			<div class="footerContacts-wrapper">
				<div class="footerContacts">
					<div class="footerContactInfo">
						<p class="infoHeader">{{getFooterText.contacts}}</p>
						<a  href="mailto:ettex.kyiv@gmail.com" class="info">ettex.kyiv@gmail.com</a>
						<a href="tel:+380677286148" class="info">+38 067 728 61 48</a>
						<a href="tel:+380935371087" class="info">+38 093 537 10 87</a>
						<a href="tel:+380975335323" class="info">+38 097 533 53 23</a>
					</div>
					<div class="footerMailInfo">
						<p class="infoHeader">{{getFooterText.mail}}</p>
						<p class="info">{{getFooterText.text}}</p>
					</div>
				</div>
			</div>
			<div class="footerLinks">
				<div class="links">
					<a href="viber://chat?number=+380677286148" target="_blank">
						<i class="icon-viber"></i>
					</a>
					<a href="tg://resolve?domain=kbrnk" target="_blank">
						<i class="icon-telegram"></i>
					</a>
					<a href="https://wa.me/+380975335323" target="_blank">
						<i class="icon-whatsapp"></i>
					</a>
				</div>
			</div>
			<a href="mailto:nznmv@gmail.com" target="_blank">
				<i class="icon-nznmv"></i>
			</a>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'Footer',
	computed: {
		...mapGetters(['getFooterText']),
	}
}
</script>

<style lang="scss">
@import 'styles/components/imports/variables';
@import "styles/components/imports/breakpoints";

.footer-wrapper {
	width: 100vw;
	height: 25.5em;
	background: #000;

	@include media-breakpoint-down($small) {
		height: 33em;
	}


	.footer {
		max-width: 68.75em;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		color: $white;
		padding: 0 1em;
		position: relative;

		@include media-breakpoint-down($middle) {
			flex-direction: column-reverse;
			align-items: center;
			justify-content: space-evenly;
		}

		.footerContacts-wrapper {
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			@include media-breakpoint-down($middle) {
				width: 100%;
			}

			.footerContacts {
				display: flex;
				width: 100%;

				@include media-breakpoint-down($middle) {
					justify-content: space-evenly;
					flex-wrap: wrap;
				}

				@include media-breakpoint-down($small) {
					justify-content: flex-start;
				}

				.footerContactInfo {
					display: flex;
					flex-direction: column;
					margin-right: 5em;
				}
			}

			.infoHeader {
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 1.35em;
				color: $whiteOP28;
				text-transform: uppercase;
				letter-spacing: 0.1em;
				margin-top: 0.75em;
			}

			.info {
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.45em;
				text-decoration: none;

				@include media-breakpoint-down($middle) {
					margin-top: 0.75em;
				}

				&:link, &:visited{
					color: white;
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.footerLinks {
		width: 50%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		@include media-breakpoint-down($middle) {
			width: 100%;
			justify-content: center;
		}

	.links {
		width: 14em;
		height: 4em;
		display: flex;
		justify-content: space-between;

		@include media-breakpoint-down($middle) {
			width: 60%;
		}

		@include media-breakpoint-down($small) {
			width: 100%;
			justify-content: space-around;
			margin-top: 5em;
		}

		& > a {
			display: inline-block;
		}
	}
	}
}

.icon {
	&-telegram {
		display: inline-block;
		@include icon-create (Telegram, 4em);
	}

	&-viber {
		display: inline-block;
		@include icon-create (Viber, 4em);
	}

	&-whatsapp {
		display: inline-block;
		@include icon-create (Whatsapp, 4em);
	}

	&-nznmv {
		display: inline-block;
		position: absolute;
		right: 1em;
		bottom: 1em;
		@include icon-create (logo_nznmv_white, 6em);

		&:before {
			height: 3.5em;
		}
		@include media-breakpoint-down($small) {
			bottom: 0em;
		}
	}
}

</style>
