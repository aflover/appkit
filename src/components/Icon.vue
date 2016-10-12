<template>
	<i :class="[icon, meta && ('icon-meta ' + meta ), theme && theme]"></i>
</template>

<script>
	export default {
		props:{
			icon: {
				type: String,
				default: '',
			},
			meta: {
				type: String,
				default: '',
			},
			theme: {
				type: String,
				default: ''
			}
		}
	}
</script>
