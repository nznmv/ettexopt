<template>
	<div class="custom-select" :tabindex="tabindex" @blur="open = false">
		<div class="selected" :class="{ open: open }" @click="open = !open">
			{{ selected }}
		</div>
		<div class="items" :class="{ selectHide: !open }">
			<div
				v-for="(option, i) of options"
				:key="i"
				@click="
          selected = option;
          open = false;
          $emit('input', option);
        "
			>
				{{ option }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			required: true,
		},
		default: {
			type: String,
			required: false,
			default: null,
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	data() {
		return {
			selected: this.default
				? this.default
				: this.options.length > 0
					? this.options[0]
					: null,
			open: false,
		};
	},
	mounted() {
		this.$emit("input", this.selected);
	},
};
</script>

<style lang="scss" scoped>
@import "styles/components/imports/variables";

.custom-select {
	position: relative;
	height: 2em;
	width: 3.5em;
	text-align: left;
	outline: none;
	line-height: 2em;
	cursor: pointer;
	z-index: 10;

	.selected {
		background-color: $purple;
		border-radius: 6px;
		border: none;
		font-family: $loadedFamilyBold;
		font-size: 1em;
		text-transform: uppercase;
		color: #fff;
		padding-left: 0.4em;
		cursor: pointer;
		user-select: none;
	}

	.selected.open {
		border: none;
		border-radius: 6px 6px 0 0;

		&:after {
			transition: transform 0.5s;
			position: absolute;
			content: "";
			top: 0.55em;
			right: 0.4em;
			width: 0;
			height: 0;
			border: 5px solid transparent;
			border-color: #fff transparent transparent transparent;
			transform: rotate(180deg);
		}
	}

	.selected:after {
		position: absolute;
		content: "";
		top: 0.95em;
		right: 0.4em;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border-color: #fff transparent transparent transparent;
		transition: transform 0.5s;
	}

	.items {
		color: #fff;
		border-radius: 0 0 6px 6px;
		overflow: hidden;
		font-family: $loadedFamilyBold;
		font-size: 1em;
		text-transform: uppercase;
		position: absolute;
		background-color: $purple;
		left: 0;
		right: 0;
		z-index: 1;
	}

	.items div {
		color: #fff;
		padding-left: 1em;
		cursor: pointer;
		user-select: none;
		transition: 0.3s;
	}

	.items div:hover {
		background-color: $darkPurple;
	}
}

.selectHide {
	display: none;
}

</style>
