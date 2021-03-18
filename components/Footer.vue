<template>
	<div class="footer-wrapper">
		<div class="footer" id="contacts">
			<div class="footerContacts-wrapper">
				<div class="footerContacts">
					<div class="footerContactInfo">
						<p class="infoHeader">{{getFooterText.contacts}}</p>
						<a  href="mailto:ettex.kyiv@gmail.com" class="info">ettex.kyiv@gmail.com</a>
						<a href="+380677286148" class="info">+38 067 728 61 48</a>
						<a href="+380935371087" class="info">+38 093 537 10 87</a>
						<a href="+380975335323" class="info">+38 097 533 53 23</a>
					</div>
					<div class="footerMailInfo">
						<p class="infoHeader">{{getFooterText.mail}}</p>
						<p class="info">{{getFooterText.text}}</p>
					</div>
				</div>
			</div>
			<div class="footerLinks">
				<div class="links">
					<a href="viber://chat?number=+380677286148">
						<i class="icon-viber"></i>
					</a>
					<a href="tg://resolve?domain=kbrnk">
						<i class="icon-telegram"></i>
					</a>
				</div>
			</div>
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

.footer-wrapper {
	width: 100vw;
	height: 25.5em;
	background: #000;


	.footer {
		max-width: 68.75em;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		color: $white;

		.footerContacts-wrapper {
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			.footerContacts {
				display: flex;
				width: 100%;

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
			}

			.info {
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.45em;
				text-decoration: none;
				margin-top: 0.75em;

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

	.links {
		width: 9em;
		height: 4em;
		display: flex;
		justify-content: space-between;

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
}

</style>
