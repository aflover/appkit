<template>
	<flex-window>
		<flayout id="navbar">
			<div slot="header" id="nav_header">veak</div>
			<div id="navmenu">
				<nav-group v-for="nav in navs" :title="nav.title" :routers="nav.routers"></nav-group>
			</div>
		</flayout>
		<div id="main">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</flex-window>
</template>

<script>
	import RouterLinks from './routerlinks'
	export default {
	  data () {
	    return {
	    	navs: RouterLinks.navs,
	    }
	  }
	}
</script>

<style>
	#main {
		overflow-y: auto;
		flex-grow: 1;
		margin-left: 5px;
		padding: 10px;
	}

	#navbar {
		border-right: 1px solid #ddd;
		min-width: 150px;
		padding: 5px;
	}

	#nav_header {
		font-weight: bold;
	    text-align: center;
	    padding: 10px;
	    font-size: 1.5em;
	}
</style>
