export default [
	{
	name: 'home',
	path: '',
	method: import("../Home/home.js"),
	},
	{
	name: 'product',
	path: 'product/:id',
	method: import("../Home/home.js"),
	},
	{
	name: 'catalog',
	path: 'catalog',
	method: import("../Users/catalog.js"),
	}
]