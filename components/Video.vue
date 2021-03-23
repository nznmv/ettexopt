<template>
	<div class="videoReview-wrapper"  >
		<div class="videoReview" >
			<h2 class="blockTitle" id="review">{{ getVideoText.title }}</h2>
			<div class="videos-wrapper">
				<div class="bigVideos">
					<agile
						:slidesToShow="1"
						:autoplay="false"
					>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(1)"
									alt="you tube videos screen"
									:id="setVideoId(1)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(2)"
									alt="you tube videos screen"
									:id="setVideoId(2)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(3)"
									alt="you tube videos screen"
									:id="setVideoId(3)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(4)"
									alt="you tube videos screen"
									:id="setVideoId(4)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(5)"
									alt="you tube videos screen"
									:id="setVideoId(5)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(6)"
									alt="you tube videos screen"
									:id="setVideoId(6)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(7)"
									alt="you tube videos screen"
									:id="setVideoId(7)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(8)"
									alt="you tube videos screen"
									:id="setVideoId(8)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(9)"
									alt="you tube videos screen"
									:id="setVideoId(9)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(10)"
									alt="you tube videos screen"
									:id="setVideoId(10)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(11)"
									alt="you tube videos screen"
									:id="setVideoId(11)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(12)"
									alt="you tube videos screen"
									:id="setVideoId(12)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(13)"
									alt="you tube videos screen"
									:id="setVideoId(13)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(14)"
									alt="you tube videos screen"
									:id="setVideoId(14)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(15)"
									alt="you tube videos screen"
									:id="setVideoId(15)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(16)"
									alt="you tube videos screen"
									:id="setVideoId(16)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(17)"
									alt="you tube videos screen"
									:id="setVideoId(17)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(18)"
									alt="you tube videos screen"
									:id="setVideoId(18)"
								>
							</div>
						</div>
						<div class="slide">
							<div
								class="videoThumb"
								@click="showThisVideo"
							>
								<img
									:src="selectVideo(19)"
									alt="you tube videos screen"
									:id="setVideoId(19)"
								>
							</div>
						</div>
					</agile>
				</div>
				<div class="smallVideos">
					<div
						class="videoThumb"
						@click="showThisVideo"
					>
						<img
							:src="selectVideo(20)"
							alt="you tube videos screen"
							:id="setVideoId(20)"
						>
					</div>
					<div
						class="videoThumb"
						@click="showThisVideo"
					>
						<img
							:src="selectVideo(21)"
							alt="you tube videos screen"
							:id="setVideoId(21)"
						>
					</div>
				</div>
			</div>
			<LazyVideoModal v-if="modal_show"/>
		</div>
	</div>

</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import { youtube } from '@/config/video';

export default {
	name: "Video",
	data() {
		return {
			youtube,
		}
	},
	methods: {
		...mapActions(['setModalShow']),
		selectVideo(id) {
			return `https://img.youtube.com/vi/${this.youtube[id]}/sddefault.jpg`
		},

		setVideoId(id) {
			return `${this.youtube[id]}`
		},

		showThisVideo(event) {
			if(event.target.nodeName === 'IMG') {
				this.setModalShow({modal: true, id:event.target.id});
			} else {
				this.setModalShow({modal: true, id:event.target.childNodes[0].id});
			}
		}
	},
	computed: {
		...mapState(['modal_show']),
		...mapGetters(['getVideoText']),
	}
}
</script>

<style lang="scss">
@import 'styles/components/imports/variables';
@import "styles/components/imports/breakpoints";


.videoReview-wrapper {
	position: relative;
	width: 100vw;
	overflow: hidden;

	.videoReview {
		max-width: 68.75em;
		height: 50em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 1em;

		@include media-breakpoint-down($desktop-breakpoint) {
			max-width: none;
			justify-content: space-evenly;
			height: 65em;
		}

		@include media-breakpoint-down($middle) {
			height: 50em;
		}

		@include media-breakpoint-down($small) {
			height: 30em;
		}

		.blockTitle {
			max-width: 10em;
			margin-bottom: 2em;

			@include media-breakpoint-down($desktop-breakpoint) {
				margin-bottom: 0.2em;
			}

			@include media-breakpoint-down($small) {
				font-size: 2em;
			}
		}

		.videos-wrapper {
			width: 100%;
			display: flex;
			height: 25em;

			@include media-breakpoint-down($desktop-breakpoint) {
				flex-direction: column;
				height: 40em;
			}

			@include media-breakpoint-down($middle) {
				height: 34em;
			}

			@include media-breakpoint-down($small) {
				height: 15em;
			}

			.bigVideos {
				width: 70%;
				@include media-breakpoint-down($desktop-breakpoint) {
					width: 100%;
				}

				.agile{
					width: 100%;
					max-width: 45em;
					height: 25em;
					position: relative;

					@include media-breakpoint-down($desktop-breakpoint) {
						max-width: none;
					}

					@include media-breakpoint-down($middle) {
						height: 18em;
					}

					@include media-breakpoint-down($small) {
						height: 10em;
					}

					&__nav-button {
						background: transparent;
						border: none;
						color: $darkPurple;
						cursor: pointer;
						font-size: 24px;
						height: 100%;
						position: absolute;
						top: 0;
						transition-duration: .3s;
						width: 80px;
						z-index: 4;
						@include icon-create (next, 4rem);

						@include media-breakpoint-down($desktop-breakpoint) {
							color: $white;
						}

						&:before {
							@include media-breakpoint-down($desktop-breakpoint) {
								display: none;
							}
						}

						&:hover {
							background-color: rgba(#000, .3);
							opacity: 1;
							@include media-breakpoint-down($desktop-breakpoint) {
								transform: none;
							}
						}

						&--prev {
							visibility: hidden;
							left: -1.5em;
							display: flex;
							align-items: center;

							@include media-breakpoint-down($desktop-breakpoint) {
								visibility: visible;
								left: 0;
							}

							&:before {
								visibility: visible;
								transform: rotate(-180deg);
							}
						}

						&--next {
							right: -2em;
							visibility: hidden;
							display: flex;
							align-items: center;

							@include media-breakpoint-down($desktop-breakpoint) {
								visibility: visible;
								right: 0;
								justify-content: flex-end;
							}

							&:before {
								visibility: visible;
							}
						}
					}

					&__dots {
						bottom: 10px;
						left: 50%;
						position: absolute;
						transform: translate(-50%);
						display: flex;
						justify-content: space-between;
						z-index: 4;
					}


					&__dot {
						margin: 0 10px;
						position: relative;

						button {
							border: none;
							background-color: $whiteOP28;
							border-radius: 50%;
							cursor: pointer;
							display: block;
							height: 10px;
							font-size: 0;
							line-height: 0;
							margin: 0;
							padding: 0;
							transition-duration: .3s;
							width: 10px;
						}

						&:before {
							content: '';
							position: absolute;
							width: 1.5em;
							height: 1.5em;
							top: -6px;
							left: -6px;
							z-index: auto;
						}

						&--current, &:hover {
							button {
								background-color: $white;
							}
						}
					}

					.slide {
						display: block;
						width: 100%;
						height: 25em;
						object-fit: contain;


						.videoThumb {
							width: 100%;
							height: 25em;
							overflow: hidden;
							position: relative;
							cursor: pointer;

							@include media-breakpoint-down($desktop-breakpoint) {
								height: 25em;
							}

							@include media-breakpoint-down($middle) {
								height: 18em;
							}

							@include media-breakpoint-down($small) {
								height: 10em;
							}

							img {
								object-fit: cover;
								width: 100%;
								height: 100%;
								max-width: none;
								max-height: none;
							}

							&:before {
								content: '';
								display: inline-block;
								width: 3em;
								height: 3em;
								background: url('~/static/icon/youtube.svg') no-repeat center;
								background-size: 100%;
								position: absolute;
								left: 50%;
								top: 50%;
								transform: translate(-1.5em, -1.5em);
								transition: 0.3s;
							}

							&:hover {
								&:before {
									background: url('~/static/icon/youtubeActive.svg') no-repeat center;
									background-size: 100%;
								}
							}
						}
					}
				}
			}

			.smallVideos {
				width: 30%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				@include media-breakpoint-down($desktop-breakpoint) {
					flex-direction: row;
					width: 100%;
					margin-top: 1em;
					height: 25em;
				}

				@include media-breakpoint-down($middle) {
					height: 12em;
				}

				@include media-breakpoint-down($small) {
					height: 5em;
				}

				.videoThumb {
					width: 100%;
					height: 12em;
					overflow: hidden;
					position: relative;
					cursor: pointer;

					@include media-breakpoint-down($middle) {
						height: 12em;
					}

					@include media-breakpoint-down($small) {
						height: 5em;
					}

					&:last-child {
						@include media-breakpoint-down($desktop-breakpoint) {
							border-left: 0.5em solid $white;
						}
					}

					img {
						object-fit: cover;
						width: 140%;
						height: 100%;
						max-width: none;
						max-height: none;
					}

					&:before {
						content: '';
						display: inline-block;
						width: 3em;
						height: 3em;
						background: url('~/static/icon/youtube.svg') no-repeat center;
						background-size: 100%;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-1.5em, -1.5em);
						transition: 0.3s;
					}

					&:hover {
						&:before {
							background: url('~/static/icon/youtubeActive.svg') no-repeat center;
							background-size: 100%;
						}
					}

				}
			}
		}
	}
}

.icon {
	&-youtube{
		@include icon-create (youtube, 4em);
	}
}
</style>
