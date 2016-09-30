<template>
	<label class="check">
		<input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)"/>
		<span class="check-text"><slot></slot></span>
	</label>
</template>

<script type="text/javascript">
	export default {
		props: {
			value: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>
