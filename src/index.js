import "./styles.css";
// import renderCatalog from "./Users/catalog";
// import renderProduct from "./Users/catalog";
// import renderHome from './Home/home';

(async() => {
	const routers = [
		{
		name: 'home',
		path: '',
		method: import("./Home/home"),
		},
		{
		name: 'product',
		path: 'product/:id',
		},
		{
		name: 'catalog',
		path: 'catalog',
		method: import("./Users/catalog.js"),
		}
	]

	const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '');
	for (const route of routers) { 
		try {
			const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$');
			const partPath = currentPath.match(reg);
			if (partPath) {
				// route.name;
				const m = await route.method;
				m.default();

			}
		} catch (err) {
			console.log(err);
		}
	}
})();