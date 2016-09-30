<template>
	<flex-window>
		<flayout id="navbar">
			<div slot="header">User Profile</div>
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
	import FlexWindow from '../../components/FlexWindow.vue'
	import Flayout from '../../components/Flayout.vue'
	import NavGroup from '../../components/NavGroup.vue'
	import RouterLinks from './routerlinks'
	
	export default {
	  data () {
	    return {
	    	navs: RouterLinks.navs,
	    }
	  },
	  components: {
	  	FlexWindow,
	  	Flayout,
	  	NavGroup,
	  }
	}
</script>

<style lang="scss">
	$icon-font-fontawesome-path: 	'../../fonts' !default;
	$icon-font-photon-path: 	'../../fonts' !default;

	@import "appkit.scss";

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
</style>
