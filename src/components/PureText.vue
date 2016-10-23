<template>
	<textarea
		:type="type" 
		:class="['input', theme && theme ]" 
		:value="value" 
		:disabled="disabled"
		@change="$emit('input', $event.target.value)"
	></textarea> 
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
			},
			theme: {
				type: String,
				default: '',
			},
		}
	}
</script>
