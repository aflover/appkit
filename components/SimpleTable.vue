<template>
	<table class="table">
		<thead v-if="!noHeader && columns.length">
			<tr><th v-for="col in columns">{{col.title}}</th></tr>
		</thead>
		<tbody>
			<slot>
				<tr v-for="data in datas">
					<td v-for="col in columns">{{data[col.key]}}</td>
				</tr>
			</slot>
		</tbody>
	</table>
</template>

<script type="text/javascript">
	import { propValue } from './util.js'
	export default {
		props: {
			columns: {
				type: Array,
				default: propValue(Array),
			},
			noHeader: {
				type: Boolean,
				default: false,
			},
			datas: {
				type: Array,
				default: propValue(Array),
			}
		}
	}
</script>