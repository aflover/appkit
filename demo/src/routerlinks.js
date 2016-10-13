let configs = [
	{ title: 'Icons',
		children: [ 
			{ title: 'FontAwesome', path: '/icons/font-awesome', component: require('./DemoFontAwesome.vue')},
			{ title: 'Photon', path: '/icons/photon', component: require('./DemoPhoton.vue')},
		]
	},
	{ title: 'Elements',
		children: [ 
			{ title: 'Form', path: '/elements/form', component: require('./DemoForm.vue')},
		]
	},
	{ title: 'Container',
		children: [ 
			{ title: 'Table', path: '/container/table', component: require('./DemoTable.vue')},
			{ title: 'Tab',   path: '/container/simpletab', component: require('./DemoTab.vue')},
		]
	},
	{
		title: 'Layout',
		children: [
			{ title: 'Grid', path: '/layout/grid', component: require('./DemoGrid.vue')},
		]
	}
];

let routers = [];
let navs = configs.map(function (route) {
	routers = routers.concat(route.children);
	return {
		title: route.title,
		routers: route.children.map(function (it) {
			return {
				title: it.title,
				to: { path: it.path },
			};
		})
	};
});

export default {
	routers,
	navs,
}