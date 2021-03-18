<template>
	<div class="header">
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
	</div>
</template>

<script>
	import LanguageChanger from '@/components/LanguageChanger';
	import {mapActions, mapGetters, mapState} from 'vuex';
	export default {
		name: "Header",
		components: {LanguageChanger},
		methods: {
			...mapActions(['setTextConfig']),
		},
		computed: {
			...mapGetters(['getHeaderText']),
		},
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
			background: url('~/static/icon/logo.svg') center no-repeat;
			cursor: pointer;
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
			}


		}
	}
</style>
