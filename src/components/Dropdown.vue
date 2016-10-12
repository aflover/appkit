<template>
	<div 
		:class="['dropdown', open && 'is-open', dropRight && 'is-drop-right']"
		>
		<slot name="control"></slot>
		<slot></slot>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			open: {
				type: Boolean,
				default: false,
			},
			dropRight: {
				type: Boolean,
				default: false,
			},
		}
	}
</script>
