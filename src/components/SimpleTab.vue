<template>
	<div class="tab-panel">
		<div :class="classes.concat(['tab-nav'])">
			<div 
				v-for="it in tabs"
				:class="['tab-title', (it.value == value) && 'is-selected', it.titleTheme]" 
				@mouseenter="mouse && $emit('input', it.value)"
				@click="$emit('input', it.value)">
				{{it.title}}
			</div>
		</div>
		<div :class="['tab-container']">
			<div
				v-for="it in tabs"
				:class="['tab-content', (it.value == value) && 'is-selected', it.contentTheme]"
				>
				<slot :name="it.value" ></slot>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { propValue } from './util.js'
	export default {
		props: {
			tabs: {
				type: Array,
				default: propValue(Array),
			},
			value: {
				type: String,
				default: ''
			},
			classes: {
				type: Array,
				default: propValue(Array),
			},
			mouse: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>