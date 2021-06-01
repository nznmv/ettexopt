<template>
	<div class="header">
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TTWQ9N4X1R"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TTWQ9N4X1R');
</script>
		<div class="logo"></div>
		<div class="menu">
				<ul class="navigation">
					<li><a href="#aboutProducts">{{ getHeaderText.aboutProduct }}</a></li>
					<li><a href="#advantages">{{ getHeaderText.advantages }}</a></li>
					<li><a href="#review">{{ getHeaderText.review }}</a></li>
					<li><a href="#cooperation">{{ getHeaderText.cooperation }}</a></li>
					<li><a href="#contacts">{{ getHeaderText.contact }}</a></li>
				</ul>
			<div class="additional">
				<LanguageChanger
					:options="['ру', 'укр']"
					:default="'ру'"
					class="select"
					@input="setTextConfig($event)"
				/>
			</div>
		</div>
		<Slide
			class="burgerMenu"
			:closeOnNavigation="true"
			noOverlay
		>
			<a href="#aboutProducts"><span>{{ getHeaderText.aboutProduct }}</span></a>
			<a href="#advantages"><span>{{ getHeaderText.advantages }}</span></a>
			<a href="#review"><span>{{ getHeaderText.review }}</span></a>
			<a href="#cooperation"><span>{{ getHeaderText.cooperation }}</span></a>
			<a href="#contacts"><span>{{ getHeaderText.contact }}</span></a>
		</Slide>
	</div>
</template>

<script>
	import LanguageChanger from '@/components/LanguageChanger';
	import {mapActions, mapGetters, mapState} from 'vuex';
	import { Slide } from 'vue-burger-menu'

	export default {
		name: "Header",
		components: {
			Slide,
		},
		methods: {
			...mapActions(['setTextConfig']),
		},
		computed: {
			...mapGetters(['getHeaderText']),
		},
	}
</script>

<style lang="scss">
@import "styles/components/imports/variables";
@import 'styles/components/imports/_breakpoints.scss';

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 8.125em;
		max-width: 68.75em;
		margin:0 auto;
		padding: 0 1em;

		@include media-breakpoint-down($desktop-breakpoint) {
			justify-content: center;
			height: 6em;
		}

		.logo {
			width: 7em;
			height: 3.75em;
			background: url('~/static/icon/logo.svg') center no-repeat;
			cursor: pointer;
		}

		.burgerMenu {
			display: none;

			.bm-burger-button {
				top: 2.2em;
				left: 1em;
			}
			.bm-burger-bars {
				background-color: $purple;
			}
			.cross-style {
				right: 1em;
				top: 1.5em;

				&:before {
					content: '';
					position: absolute;
					left: -0.8em;
					top: -0.5em;
					width: 2em;
					height: 2em;
				}
			}
			.bm-cross {
				background: $white;
			}
			.bm-menu {
				background-color: $purple; /* Black*/
				transition: 0.3s
			}

			.bm-item-list {
				color: $white;
				margin-left: 10%;
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 2.75em;
				text-decoration: none;
				text-transform: uppercase;
			}
			.bm-item-list > * {
				display: flex;
				text-decoration: none;
				padding: 0.7em;
			}
			.bm-item-list > * > span {
				margin-left: 10px;
				font-weight: 700;
				color: white;
				overflow: hidden;
				white-space: nowrap;
			}

			@include media-breakpoint-down($desktop-breakpoint) {
				display: block;
			}
		}

		.menu {
			display: flex;
			align-items: center;

			.navigation {
				display: flex;
				justify-content: space-between;
				width: 33em;
				color: $purple;
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 2.75em;

				@include media-breakpoint-down($desktop-breakpoint) {
					display: none;
					position: absolute;
					right: 1em;
				}

				&>li {
					&>a {
						text-decoration: none;
						text-transform: uppercase;

						&:hover {
							text-decoration: underline;
						}

						&:visited, &:active, &:link {
							color: $purple;
						}
					}
				}
			}

			.additional {
				margin-left: 3em;

				@include media-breakpoint-down($desktop-breakpoint) {
					position: absolute;
					right: 1em;
				}
			}
		}
	}
</style>
