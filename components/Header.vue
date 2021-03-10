<template>
	<header class="header">
		<div class="logo"></div>
		<div class="menu">
			<ul class="navigation">
				<li><a href="">{{ text.aboutProduct }}</a></li>
				<li><a href="">{{ text.advantages }}</a></li>
				<li><a href="">{{ text.review }}</a></li>
				<li><a href="">{{ text.cooperation }}</a></li>
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
	</header>
</template>

<script>
	import LanguageChanger from '@/components/LanguageChanger';
	import {mapActions} from 'vuex';
	export default {
		name: "Header",
		components: {LanguageChanger},
		props: {
			text: Object,
		},
		methods: {
			...mapActions(['setTextConfig']),
		}
	}
</script>

<style lang="scss" scoped>
@import "styles/components/imports/variables";

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 8.125em;
		max-width: 68.75em;
		margin:0 auto;

		.logo {
			width: 7em;
			height: 3.75em;
			background: url('/icon/logo.svg') center no-repeat;
			cursor: pointer;
		}

		.menu {
			display: flex;
			align-items: center;

			.navigation {
				display: flex;
				justify-content: space-between;
				width: 31em;
				color: $purple;
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 2.75em;

				&>li {
					&>a {
						text-decoration: none;
						text-transform: uppercase;

						&:visited {
							color: $purple;
						}
					}
				}
			}

			.additional {
				margin-left: 3em;
			}


		}
	}
</style>
