<template>
	<div>
		<simple-tab :tabs="tabs" v-model="tab" 
			:classes="[
				offseted &&'is-offseted', 
				titled &&'is-titled', 
				bordered &&'is-bordered', 
				flex &&'is-flex', 
				]">
			<div slot="label1">
				选项
				<check-box v-model="offseted">is-offseted</check-box>
				<check-box v-model="titled">is-titled</check-box>
				<check-box v-model="bordered">is-bordered</check-box>
				<check-box v-model="flex">is-flex</check-box>
			</div>
			<div slot="label2">内容区2</div>
			<div slot="label3">内容区3</div>
			<div slot="label4">内容区4</div>
		</simple-tab>
	</div>
</template>

<script type="text/javascript">
	
	import SimpleTab from '../../components/SimpleTab'
	import CheckBox from '../../components/CheckBox'

	export default {
		data: function () {
			return {
				tabs: [
					{ title:'标签1', value: "label1"},
					{ title:'标签2', value: "label2"},
					{ title:'标签3', value: "label3"},
					{ title:'标签4', value: "label4"},
				],
				tab: 'label1',
				offseted: true,
				titled: true,
				bordered: true,
				flex: false,
			};
		},
		components:{
			SimpleTab,
			CheckBox,
		}
	}
</script>