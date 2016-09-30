<template>
	<div :class="['nav-group']">
		<span :class="['nav-title']" v-if="title"><slot name="title">{{title}}</slot></span>
		<router-link 
			v-for="router in routers" :class="['nav-group-item']" :to="router.to">
			<span>{{router.title}}</span></router-link>
	</div>
</template>
<script type="text/javascript">
	import { propValue } from './util.js'
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			routers: {
				type: Array,
				default: propValue(Array),
			}
		}
	}
</script>
