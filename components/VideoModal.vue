<template>
	<div
		class="modal-wrapper"
		@click="setModalShow({modal:false, id: ''})"
	>
		<div class="playingVideo">
			<iframe
				width="100%"
				height="100%"
				:src="videoSrc"
				frameborder="0"
				allow="accelerometer;
					autoplay;
					clipboard-write;
					encrypted-media;
					gyroscope;
					picture-in-picture"
				allowfullscreen
			>
			</iframe>
		</div>
		<div
			class="closeButton"
			@click="setModalShow({modal:false, id: ''})"
		>
			<i class="icon-close"></i>
		</div>
	</div>
</template>

<script>


import {mapActions, mapState} from 'vuex';

export default {
name: "VideoModal",
	computed: {
		...mapState(['videoId']),
		videoSrc() {
			return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
		}
	},
	methods: {
	...mapActions(['setModalShow']),
		closeModal() {
		 this.setModalShow({modal:false, id: ''});
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "styles/components/imports/variables";
	@import "styles/components/imports/breakpoints";

	.modal-wrapper {
		width: 100%;
		height: 100%;
		background: $blackMedium;
		z-index: 101;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		.playingVideo {
			width: 70%;
			height: 70%;

			@include media-breakpoint-down($desktop-breakpoint) {
				width: 100%;
				height: 50%;
			}
		}
		.closeButton {
			width: 3em;
			height: 3em;
			background: $white;
			border-radius: 50%;
			position: absolute;
			right: 2em;
			top: 2em;
			display: flex;
			justify-content: center;
			align-items: center;

			@include media-breakpoint-down($middle) {
				right: 50%;
				top: 4em;
				transform: translate(1.5em);
			}

			&:before {
				content: '';
				background:  url('~/static/icon/close.svg') no-repeat center;
				width: 1em;
				height: 1em;
				background-size: 100%;
			}
		}
	}

</style>
