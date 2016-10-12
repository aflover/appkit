<template>
	<div :class="['grid-row', 'form-control']">
		<span :class="['label', align && 'grid-col-' + align]">{{text}}</span>
		<span :class="['grid-col-' + (12 - align) ]"><slot></slot></span>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			text: {
				type: String,
				default: '',
			},
			align: {
				type: Number,
				default: 2,
			}
		}
	}
</script>