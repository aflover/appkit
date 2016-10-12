<template>
	<li
		@click.prevent.stop="(isSub || item[fields.disabled]) || handle(item)"
		:class="['drop-menu-item', 
			item[fields.disabled] && 'is-disabled',
			item[fields.checked] && 'is-checked',
			isSub && 'is-sub']"
		>
		<span>{{item[fields.text]}}</span>
		<ul :class="['drop-menu']" v-if="isSub">
			<menu-iter v-for="it in item.items" 
				:item="it" 
				:handle="handle"  
				:fields="fields" ></menu-iter>
		</ul>
	</li>
</template>

<script type="text/javascript">
	import { propValue, uniqueKey } from './util.js'
	export default {
		name: 'menu-iter',
		props: {
			item: {
				type: Object,
				// default: function () {
				// 	return {
				// 		text: '',
				// 		disabled: false,
				// 		checked: false,
				// 		items: propValue(Array),
				// 	};
				// },
			},
			fields: {
				type: Object,
				// default: function () {
				// 	return {
				// 		text: 'text',
				// 		disabled: 'disabled',
				// 		checked: 'checked',
				// 		value: 'value',
				// 	};
				// }
			},
			handle: {
				type: Function,
				default: propValue(Function),
			},
		},
		computed: {
			isSub: function () {
				return this.item.items && this.item.items.length;
			}
		},
	}
</script>
