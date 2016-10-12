<template>
	<div :class="[ row ? 'flayout-row' : 'flayout-col']">
		<div v-if="showHeader" class="flayout-header"><slot name="header"></slot></div>
		<div class="flayout-content"><slot></slot></div>
		<div v-if="showFooter" class="flayout-footer"><slot name="footer"></slot></div>
	</div>
</template>

<script>
	export default {
		props: {
			row: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			showHeader: function () {
				return this.$slots.header
			},
			showFooter: function () {
				return this.$slots.footer
			}
		},
	}
</script>
