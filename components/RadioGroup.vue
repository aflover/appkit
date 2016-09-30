<template>
	<div class="radio-group">
		<label class="radio" v-for="opt in options">
			<input type="radio"
				:name="group"
				:value="opt.value"
				:checked="opt.value == value"
				@change="$emit('input', $event.target.value)"/>
			<span class="radio-text">{{opt.text}}</span>
		</label>
	</div>
</template>

<script type="text/javascript">
	import { propValue, uniqueKey } from './util.js'
	export default {
		props: {
			options: {
				type: Array,
				default: propValue(Array),
			},
			value: {
				default: ''
			}
		},
		data: function () {
			return {
				group: uniqueKey('radio-key-')
			}
		}
	}
</script>
