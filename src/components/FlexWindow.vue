<template>
	<div class="window-container">
		<div v-if="showHeader" class="window-header"><slot name="header"></slot></div>
		<div class="window-content"><slot></slot></div>
		<div v-if="showFooter" class="window-footer"><slot name="footer"></slot></div>
	</div>
</template>

<script>

	function getHtmlClass() {
		return document.querySelector('html').classList;
	}

	export default {
		computed: {
			showHeader: function () {
				return this.$slots.header
			},
			showFooter: function () {
				return this.$slots.footer
			}
		},
		mounted: function () {
			getHtmlClass().add('flex-window');
		},
		destroyed: function () {
			getHtmlClass().remove('flex-window');
		}
	}
</script>
