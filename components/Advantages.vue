<template>
	<div class="advantages-wrapper">
		<div class="advantages">
			<div class="advantagesSlider">
				<h2 class="advantagesTitle">{{getAdvantagesText.title}}</h2>
				<agile
					class="main"
					ref="main"
					:options="options1"
					:as-nav-for="asNavFor1">
					<div
						class="slide"
						v-for="(slide, index) in slides"
						:key="index"
						:class="`slide--${index}`"
					>
						<img :src="slide"/></div>
				</agile>
				<agile
					class="thumbnails"
					ref="thumbnails"
					:options="options2"
					:as-nav-for="asNavFor2"
				>
					<div
						class="slide slide--thumbniail"
						v-for="(slide, index) in slides"
						:key="index"
						:class="`slide--${index}`"
						@click="$refs.thumbnails.goTo(index)"
					>
						<img :src="slide" />
					</div>
				</agile>
			</div>
			<div class="advantagesText"></div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
name: "Advantages",
	data () {
		return {
			asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: false
			},

			options2: {
				autoplay: true,
				centerMode: true,
				dots: false,
				navButtons: false,
				slidesToShow: 3,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 5
						}
					},

					{
						breakpoint: 1000,
						settings: {
							navButtons: true
						}
					}
				]

			},

			slides: [
				'/images/magio/1.JPG',
				'/images/magio/2.JPG',
				'/images/magio/3.JPG',
				'/images/magio/4.JPG',
				'/images/magio/5.JPG',
				'/images/magio/6.JPG',
				'/images/magio/7.JPG',
				'/images/magio/8.JPG',
				'/images/magio/9.JPG',
				'/images/magio/10.JPG',
				'/images/magio/11.JPG',
				'/images/magio/12.JPG',
				'/images/magio/13.JPG',
				'/images/magio/14.JPG',
				'/images/magio/15.JPG',
				'/images/magio/16.JPG',
			]
		}

	},
	computed: {
		...mapGetters(['getAdvantagesText']),
	},
	mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	}
}
</script>

<style lang="scss">
	@import "styles/components/imports/variables";

	.advantages-wrapper {
		width: 100vw;
		background: $purpleBackground;
		height: 53em;

		.advantages {
			max-width: 68.75em;
			height: 100%;
			margin:0 auto;


			.advantagesSlider {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.advantagesTitle {
					font-family: $loadedFamilyBold;
					font-size: 3em;
					color: $white;
					margin-bottom: 1em;
				}

				.main {
					margin-bottom: 30px;
				}
				.thumbnails {
					margin: 0 -5px;
					width: calc(100% + 10px);
					.agile__nav-button {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
					}
					.agile__nav-button--prev {
						left: -45px;
					}
					.agile__nav-button--next {
						right: -45px;
					}
				}
				.agile__nav-button {
					background: transparent;
					display: none;
					border: none;
					color: #ccc;
					cursor: pointer;
					font-size: 24px;
					transition-duration: 0.3s;
					&:hover {
						color: #888;
					}
				}
				.agile__dot {
					margin: 0 10px;
					button {
						background-color: #eee;
						border: none;
						border-radius: 50%;
						cursor: pointer;
						display: block;
						height: 10px;
						font-size: 0;
						line-height: 0;
						margin: 0;
						padding: 0;
						transition-duration: 0.3s;
						width: 10px;
					}
					&:hover {
						button {
							background-color: #888;
						}
					}
				}
				.agile__dot--current {
					button {
						background-color: #888;
					}
				}
				.slide {
					align-items: center;
					box-sizing: border-box;
					color: #fff;
					display: flex;
					height: 450px;
					justify-content: center;
					img {
						height: 100%;
						object-fit: cover;
						object-position: center;
						width: 100%;
					}
				}
				.slide--thumbniail {
					cursor: pointer;
					height: 100px;
					padding: 0 5px;
					opacity: 0.4;
					transition: opacity 0.3s;
					&:hover {
						opacity: 1;
					}
				}

			}
		}
	}
</style>
