<template>
	<div>
		<simple-tab :tabs="tabs" v-model="tab" 
			:classes="[
				offseted &&'is-offseted', 
				titled &&'is-titled', 
				bordered &&'is-bordered', 
				flex &&'is-flex', 
				]">
			<ul slot="label1">
				选项
				<check-box v-model="offseted">is-offseted</check-box>
				<check-box v-model="titled">is-titled</check-box>
				<check-box v-model="bordered">is-bordered</check-box>
				<check-box v-model="flex">is-flex</check-box>
			</ul>
			<ul class="group-col" slot="label2">
				<li class="group-item" v-for="i in 5">list-item-{{i}}</li>
			</ul>
			<div slot="label3">内容区3</div>
			<div slot="label4">内容区4</div>
		</simple-tab>
		<br>
		<br>
		<dropdown :open="openDrop">
			<btn @click="openDrop=!openDrop">dropdown</btn>
			<simple-tab style="width:300px" :tabs="tabs" v-model="tab" :class="['dropdown-view']" :classes="[
				offseted &&'is-offseted', 
				titled &&'is-titled', 
				bordered &&'is-bordered', 
				flex &&'is-flex', 
				]">
				<ul class="group-col" slot="label1">
					<li class="group-item" v-for="i in 20">list-item-{{i}}</li>
				</ul>
				<ul class="group-col" slot="label2">
					<li class="group-item" v-for="i in 10">list-item-{{i}}</li>
				</ul>
				<div slot="label3">内容区3</div>
				<div slot="label4">内容区4</div>
			</simple-tab>
		</dropdown>
	</div>
</template>

<style type="text/css">
	
	.tab-content.content-list {
		padding: 0;
	}
	.tab-content.content-list > ul {
		display:block; 
		max-height: 200px; 
		overflow:auto;
	}
</style>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				tabs: [
					{ title:'标签1', value: "label1", contentTheme: 'content-list'},
					{ title:'标签2', value: "label2", contentTheme: 'content-list'},
					{ title:'标签3', value: "label3"},
					{ title:'标签4', value: "label4"},
				],
				tab: 'label1',
				offseted: false,
				titled: true,
				bordered: true,
				flex: false,

				openDrop: false,
			};
		}
	}
</script>