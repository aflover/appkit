<template>
	<dropdown 
		:open="isOpen"
		@mouseleave.native="mouse && (isOpen = false)"
		:class="dropdownTheme"
		>
		<btn
			:theme="btnTheme"
			@click="isOpen = !isOpen"
			@mouseenter.native="mouse && (isOpen = true)"
			slot="control"
			:tabindex="tabindex"
			>
			<span>{{displayText}}</span>
			<icon v-if="!hideArrow" :meta="arrow ? 'icon-arrow' : 'icon-caret'" :theme="theme"></icon>
		</btn>
		<ul :class="['drop-select', 'dropdown-view', theme && theme]">
			<li v-for="item in options"
				@click="selectItem(item)"
				:class="['drop-select-item', 
					item[fields.disabled] && 'is-disabled',
					item[fields.value] === value && ( (active && 'is-active') || (check && 'is-checked') )]"
				>
				<span>{{item[fields.text]}}</span>
			</li>
		</ul>
	</dropdown>
</template>

<script type="text/javascript">
	import Btn from './Btn.vue'
	import Dropdown from './Dropdown.vue'
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
				default: false,
			},
			options: { // 数据选项
				type: Array,
				default: propValue(Array),
			},
			value: {},
			text: {  // 默认文本
				default: '请选择',
			},
			arrow: { // 显示箭头或三角
				type: Boolean,
				default: false,
			},
			fields: { // 字段选项
				type: Object,
				default: function () {
					return {
						text: 'text',
						disabled: 'disabled',
						// checked: 'checked',
						value: 'value',
					};
				}
			},
			active: { // 是否显示active样式
				type: Boolean,
				default: false,
			},
			check: { // 是否显示check样式
				type: Boolean,
				default: true,
			},
			theme: {
				type: String,
				default: '',
			},
			select: {
				type: Array,
				default: propValue(Array),
			},
			tabindex: {
				type: Number,
				default: 0
			},
			btnTheme: {
				type: String,
				default: '',
			},
			dropdownTheme: {
				type: String,
				default: ''
			},
			fixedText: {
				type: Boolean,
				default: false
			},
			hideArrow: {
				type: Boolean,
				default: false,
			}
		},
		data: function () {
			return {
				isOpen: this.open,
			};
		},
		computed: {
			displayText: function () {
				if (!this.fixedText) {
					var item = this.itemByValue(this.value);
					if (item) {
						return item[this.fields.text];
					}
				}
				return this.text;
			}
		},
		methods: {
			selectItem: function (item) {
				this.isOpen = false;
				this.$emit('input', item[this.fields.value], item); 
				if (this.select.length) {
					this.select[0](this.select[1], item[this.fields.value], item)
				}
			},
			itemByValue: function (value) {
				var self = this;
				return this.options.find(function (it) {
					return it[self.fields.value] === value;
				});
			}
		},
		components: {
			Btn,
			Dropdown,
			Icon,
		}
	}

</script>