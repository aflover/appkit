<template>
	<div>
		<form-control text="姓名">
			<pure-input v-model="inputModel" placeholder="请输入姓名"></pure-input>
		</form-control>
		<form-control text="姓别">
			<radio-group :options="radioOptions" v-model="radioModel"></radio-group>
		</form-control>
		<form-control text="爱好">
			<div class="check-group">
				<check-box>篮球</check-box>
				<check-box>足球</check-box>
				<check-box>气球</check-box>
			</div>
		</form-control>
		<form-control text="出生地">
			<drop-menu :options="menuItems" @select="selectMenu" text="请选择" :auto-close="false"></drop-menu>
		</form-control>
		<form-control text="国籍">
			<drop-select v-model="selectModel" :options="selectOptions"></drop-select>
			<pure-select v-model="selectModel" :options="selectOptions"></pure-select>
		</form-control>
		<form-control>
			<btn>提交</btn>
		</form-control>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'

	import RadioGroup from '../../components/RadioGroup.vue'
	import CheckBox from '../../components/CheckBox.vue'
	import Icon from '../../components/Icon.vue'
	import PureInput from '../../components/PureInput.vue'
	import PureSelect from '../../components/PureSelect.vue'
	import Btn from '../../components/Btn.vue'
	import DropSelect from '../../components/DropSelect.vue'
	import DropMenu from '../../components/DropMenu.vue'
	import FormControl from '../../components/FormControl.vue'

	export default {
		  data () {
		    return {
		        checkModel: true,
		      	radioModel: 'val1',
				radioOptions: [
					{text: '男性', value:'male'},
					{text: '女性', value:'female'},
				],
				inputModel: '',
				selectModel: '',
				selectOptions: [
					{text: 'select1', value:'val1'},
					{text: 'select2', value:'val2'},
					{text: '长一点的选项测试', value:'val3'},
					{text: 'select4', value:'val4'},
					{text: 'select5', value:'val5'},
					{text: 'select6', value:'val6'},
					{text: 'select7', value:'val7'},
					{text: 'select8', value:'val8'},
					{text: 'select9', value:'val9'},
					{text: 'select10', value:'val10'},
				],
				menuItems: [
					{text: 'menu1'},
					{text: 'menu2'},
					{text: 'menu3', items:[
						{text: 'menu-sub1'},
						{text: 'menu-sub2'},
						{text: 'menu-sub3',  items:[
							{text: 'menu-sub-sub1'},
							{text: 'menu-sub-sub2'},
						]},	
					]},
					{text: 'menu5', checked: true},
					{text: 'menu6', disabled: true},
				]
		    }
		  },
		  methods: {
		  	selectMenu: function (item) {
		  		Vue.set(item, 'checked', !item.checked);
		  	}
		  },
		  components: {
		  	RadioGroup,
		  	CheckBox,
		  	Icon,
		  	PureInput,
		  	PureSelect,
		  	Btn,
		  	DropSelect,
		  	DropMenu,
		  	FormControl,
		  }
	}
</script>