<template>
	<input 
		:type="type" 
		:class="['input']" 
		:value="value" 
		:disabled="disabled"
		@change="$emit('input', $event.target.value)"
	/>
</template>

<script>
	export default {
		props:{
			type: {
				type: String,
				default: 'text',
			},
			value: {
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>
