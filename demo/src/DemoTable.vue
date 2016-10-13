<template>
	<div>
		<simple-table :columns="columns" :datas="datas">
			<tr v-for="data in datas" >
				<td v-for="col in columns">{{data[col.key]}}</td>
			</tr>
		</simple-table>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				columns: [
					{ title:'Name', key: 'name' },
					{ title:'Age', key: 'age' },
				],
				datas: [
					{ name: '张三', age: 10 },
					{ name: '李四', age: 10 },
					{ name: '王五', age: 10 },
					{ name: '马六', age: 10 },
					{ name: '赵七', age: 10 },
				]
			};
		}
	}
</script>