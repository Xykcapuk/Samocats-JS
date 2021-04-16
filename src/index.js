import "./styles.css";
import catchLink from './Utils/catchLink';
import routers from './Router/config';
// import renderCatalog from "./Users/catalog";
// import renderProduct from "./Users/catalog";
// import renderHome from './Home/home';


(async() => {
	
	const container = document.querySelector('#app');
	catchLink(container);
	async function router() {
		const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '');
		for (const route of routers) { 
			try {
				const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$');
				const partPath = currentPath.match(reg);
				if (partPath) {
					// route.name;
					const m = await route.method;
					m.default(container);

				}
			} catch (err) {
				console.log(err);
			}
		}
	}
	catchLink(container, router);
	await router();
})();