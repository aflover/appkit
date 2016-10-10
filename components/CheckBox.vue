<template>
	<label :class="['check', theme && theme ]">
		<input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" :disabled="disabled"/>
		<span class="check-text"><slot></slot></span>
	</label>
</template>

<script type="text/javascript">
	export default {
		props: {
			value: {
				type: Boolean,
				default: false,
			},
			theme: {
				type: String,
				default: '',
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		}
	}
</script>
