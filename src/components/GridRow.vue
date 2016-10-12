<template>
	<div :class="[flex ? ('grid-row-flex flex-' + flex ) : 'grid-row']"><slot></slot></div>
</template>
<script type="text/javascript">
	export default {
		props: {
			flex: {
				type: String,
				default: '',
			}
		}
	}
</script>