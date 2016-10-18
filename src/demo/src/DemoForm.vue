<template>
	<div>
		<theme-control v-model="theme"></theme-control>
		<form-control text="姓名">
			<pure-input v-model="inputModel" placeholder="请输入姓名" :theme="theme"></pure-input>
			<pure-input v-model="inputModel" placeholder="禁用" :theme="theme" :disabled="true"></pure-input>
		</form-control>
		<form-control text="姓别">
			<radio-group :options="radioOptions" v-model="radioModel" :theme="theme"></radio-group>
		</form-control>
		<form-control text="爱好">
			<div class="check-group">
				<check-box :theme="theme" v-model="check1">篮球</check-box>
				<check-box :theme="theme" v-model="check2">足球</check-box>
				<check-box :theme="theme" v-model="check3" :disabled="true">气球</check-box>
				<check-box :theme="theme" v-model="check4" :disabled="true">热气球</check-box>
			</div>
		</form-control>
		<form-control text="出生地">
			<drop-menu :theme="theme" :options="menuItems" @select="selectMenu" text="请选择" :auto-close="false"></drop-menu>
		</form-control>
		<form-control text="国籍">
			<drop-select :theme="theme" v-model="selectModel" :options="selectOptions"></drop-select>
			<pure-select :theme="theme" v-model="selectModel" :options="selectOptions"></pure-select>
		</form-control>
		<form-control>
			<btn :theme="theme">提交</btn>
			<btn>取消</btn>
		</form-control>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import ThemeControl from './ThemeControl.vue'
	export default {
		  data () {
		    return {
		        checkModel: true,
		      	radioModel: 'double',
				radioOptions: [
					{text: '男性', value:'male'},
					{text: '女性', value:'female'},
					{text: '变性', value:'', disabled: true},
					{text: '双性', value:'double', disabled: true},
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
				],
				theme: '',
				check1: false,
				check2: true,
				check3: false,
				check4: true,
		    }
		  },
		  methods: {
		  	selectMenu: function (item) {
		  		Vue.set(item, 'checked', !item.checked);
		  	}
		  },
		  components: {
		  	ThemeControl,
		  }
	}
</script>