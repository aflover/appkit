<template>
	<label class="label-select">
		<select 
			:class="['select', theme && theme ]" 
			:value="value" 
			:disabled="disabled"
			@change="$emit('input', $event.target.value)">
			<option v-for="opt in options" :value="opt.value">{{opt.text}}</option>
		</select>
	</label>
</template>

<script>
	import { propValue, uniqueKey } from './util.js'
	export default {
		props:{
			options: {
				type: Array,
				default: propValue(Array),
			},
			value: {
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			theme: {
				type: String,
				default: '',
			},
		}
	}
</script>
