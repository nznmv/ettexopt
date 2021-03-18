<template>
	<form
		method="POST"
		class="form"
		accept-charset="UTF-8"
		v-on:submit.prevent="onSubmit()"
		id="ajaxForm"
	>
		<p class="formTitle">{{getCoopText.formTitle}}</p>
		<input
			class="input"
			type="text"
			v-model="name"
			:placeholder="getCoopText.formName"
			required
			name="Name"
		>
		<input
			class="input"
			v-model="email"
			type="email"
			:placeholder="getCoopText.formEmail"
			name="email"
		>
		<input
			class="input"
			v-model="phone"
			type="tel"
			:placeholder="getCoopText.formPhone"
			required
			name="phone"
		>
		<textarea
			class="input textarea"
			v-model="message"
			type="text"
			:placeholder="getCoopText.formText"
			required
			name="message"
		></textarea>
		<div class="success" v-if="isSuccess">
			<i class="icon-done"></i>
			<p class="successText">{{getCoopText.formSuccess}}</p>
		</div>
		<button
			class="buttonSubmit"
			type="submit"
			v-if="!isSuccess"
		>
			{{getCoopText.formButton}}
		</button>
	</form>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from "axios";

export default {
	name: "Form",
	data() {
		return{
			email: '',
			name: '',
			phone: '',
			message: '',
			isSuccess: false,
		}
	},
	methods: {
		onSubmit() {
			let data = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				message: this.message,
			};

			axios
				.post(
					"https://formsubmit.co/ettex.kyiv@gmail.com",
					data
				)
				.then(
					(response) => {
						this.isSuccess = response.status === 200;
					},
					(response) => {
					}
				);
		},
	},
	computed: {
		...mapGetters(['getCoopText']),
	}
}
</script>

<style lang="scss">
@import 'styles/components/imports/variables';

	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 2em 0 6em 0;
		align-items: center;
		height: 35em;
		width: 35.5em;
		background: $white;
		position: relative;
		bottom: -5em;

		.formTitle {
			font-family: $loadedFamilyRegular;
			font-size: 1.25em;
			line-height: 1.35em;
			color: $purpleMedium;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			position: absolute;
			top: 1em;
			left: 1em;
		}

		.input {
			border: none;
			border-bottom: 1px solid $purpleMedium;
			width: 90%;
			font-family: $loadedFamilyRegular;
			font-size: 1.125em;
			line-height: 1.35em;
			outline: none;
		}

		.success {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background: $white;

			&Text {
				max-width: 80%;
				color: $purple;
				text-align: center;
				font-family: $loadedFamilyRegular;
				font-size: 1.5em;
				line-height: 1.5em;
				z-index: 2;
			}

			.icon-done {
				@include icon-create (done, 7em);
				position: absolute;
				bottom: 2em;
				z-index: 1;
			}
		}

		.buttonSubmit {
			margin-top: 0;
			position: absolute;
			bottom: 3em;
			right: 0;
			transform: translate(20%);
			border: none;
			outline: none;
		}

		.textarea {
			max-width: 90%;
			min-width: 90%;
			max-height: 9em;
			min-height: 3em;
		}
	}
</style>
