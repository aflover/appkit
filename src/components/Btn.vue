<template>
	<button 
		:class="['btn', tick && 'btn-meta-tick', disabled && 'is-disabled', theme && theme]"
		:disabled="disabled"
		@click="$emit('click', $event)"
		><slot></slot></button>
</template>

<script>
	import { propValue, uniqueKey, noop } from './util.js'
	export default {
		props:{
			disabled: {
				type: Boolean,
				default: false,
			},
			tick: {
				type: Boolean,
				default: true,
			},
			onClick: {
				type: Function,
				default: noop
			},
			theme: {
				type: String,
				default: '',
			}
		}
	}
</script>
