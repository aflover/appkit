<template>
	<div :class="[col && ('grid-col-' + col), offset && ('grid-offset-' + offset)]">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			col: {
				type: Number,
				default: 12,
			},
			offset: {
				type: Number,
				default: 0,
			}
		}
	}
</script>