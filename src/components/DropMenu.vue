<template>
	<dropdown 
		:open="isOpen"
		@mouseleave.native="mouse && (isOpen = false)"
		>
		<span
			slot="control"
			@click="isOpen = !isOpen"
			@mouseenter="mouse && (isOpen = true)"
			>
			<slot name="default">
				<btn>
					<span>{{text}}</span>
					<icon v-if="icon" :meta="icon" :theme="theme"></icon>
				</btn>
			</slot>
		</span>
		<ul :class="['drop-menu', 'dropdown-view', theme && theme]">
			<menu-iter v-for="item in options" :item="item" :handle="select" :fields="fields"></menu-iter>
		</ul>
	</dropdown>
</template>

<script type="text/javascript">
	import Btn from './Btn.vue'
	import Dropdown from './Dropdown.vue'
	import MenuIter from './MenuIter.vue'
	import Icon from './Icon.vue'
	import { propValue } from './util.js'
	export default {
		props: {
			open: { // 默认是否展开
				type: Boolean,
				default: false,
			},
			mouse: { // 鼠标hover
				type: Boolean,
				default: true,
			},
			options: { // 数据选项
				type: Array,
				default: propValue(Array),
			},
			fields: { // 字段选项
				type: Object,
				default: function () {
					return {
						text: 'text',
						disabled: 'disabled',
						checked: 'checked',
						value: 'value',
					};
				}
			},
			text: {
				type: String,
				default: '菜单名称'
			},
			icon: {
				type: String,
				default: 'icon-arrow'
			},
			autoClose: {
				type: Boolean,
				default: true,
			},
			theme: {
				type: String,
				default: ''
			}
		},
		data: function () {
			return {
				isOpen: this.open,
			};
		},
		methods: {
			select: function (item) {
				if (this.autoClose) {
					this.isOpen = false;
				}
				this.$emit('input', item[this.fields.value]); 
				this.$emit('select', item); 
			}
		},
		components: {
			Btn,
			Dropdown,
			Icon,
			MenuIter,
		}
	}

</script>