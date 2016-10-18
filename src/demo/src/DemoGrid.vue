<template>
	<div>
		<grid-row v-for="x in gridSize" class="grid-demo">
			<grid-col :col="x"><span>col-{{x}}</span></grid-col>
			<grid-col :col="gridSize - x" v-if="x!=gridSize"><span>col-{{gridSize-x}}</span></grid-col>
		</grid-row>
		<br>
		<br>
		<grid-row v-for="x in gridSize" class="grid-demo">
			<grid-col :col="gridSize - x" v-if="x!=gridSize" :offset="x"><span>offset-{{gridSize-x}}</span></grid-col>
		</grid-row>
		<br>
		<br>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		data: function () {
			return {
				gridSize: 12
			}
		}
	}
</script>

<style>
	.grid-demo > [class*="grid-col-"] {
		padding: 1px 2px;
	}
	.grid-demo > [class*="grid-col-"]  > span {
		display: block;
		text-align: center;
		background-color: #DCDFE1;
	}
	.grid-demo.grid-row,
	.grid-demo.grid-row-flex {
		margin-bottom: 2px;
	}
</style>