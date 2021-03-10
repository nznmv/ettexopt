<template>
	<header class="header">
		<div class="logo"></div>
		<div class="menu">
			<ul class="navigation">
				<li><a href="">О ТОВАРЕ</a></li>
				<li><a href="">ПРИЕМУЩЕСТВА</a></li>
				<li><a href="">ВИДЕООБЗОРЫ</a></li>
				<li><a href="">СОТРУДНИЧЕСТВО</a></li>
			</ul>
			<div class="additional">
				<div class="callback"></div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
name: "Header"
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

			.navigation {
				display: flex;
				justify-content: space-between;
				width: 39em;
				color: $purple;
				font-family: $loadedFamilyMedium;
				font-size: 1.25em;
				line-height: 2.75em;

				&>li {

					&>a {
						text-decoration: none;

						&:visited {
							color: $purple;
						}
					}
				}
			}

			.additional {
				width: 8em;

				.callback {
					width: 3em;
					height: 3em;
					border-radius: 3em;
					background: $purple;
					opacity: 10%;

					position: fixed;
					top: 0;
					right: 0;
				}
			}


		}
	}
</style>
