<template>
	<i :class="[icon, meta && ('icon-meta ' + meta )]"></i>
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
			}
		}
	}
</script>
