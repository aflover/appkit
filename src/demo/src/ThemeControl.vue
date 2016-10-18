<template>
	<form-control text="主题">
		<drop-select :value="value" :options="themes" @input="input" :theme="value"></drop-select>
	</form-control>
</template>
<script type="text/javascript">
	export default {
		props: {
			value: {
				type: String,
				default: '',
			}
		},
		data: function () {
			return {
				themes:[
					{text: 'none', value:''},
					{text: 'is-primary', value:'is-primary'},
					{text: 'is-secondary', value:'is-secondary'},
					{text: 'is-warn', value:'is-warn'},
					{text: 'is-success', value:'is-success'},
					{text: 'is-error', value:'is-error'},
				]
			}
		},
		methods: {
			input: function (value) {
				this.$emit('input', value);
			}
		}
	}
</script>