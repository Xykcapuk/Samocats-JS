// import renderCatalog from "./Users/catalog";
// import renderProduct from "./Users/catalog";
// import renderHome from './Home/home';


import "./styles.css"; // Импортировали SRC/catalog.css 
import catchLink from './Utils/catchLink'; // Импортировали из Utils/catchLink.js
import router from './Router/index';

(async() => { // создали асинхронную функцию

	const container = document.querySelector('#app'); // Создали сontainer и вернули все элементы, находящиеся в #app	
	catchLink(container, router); // вызываем метод catchLink с аргументами container и router, в которые внесли новые данные
	await router(container); // вызываем асинхронную функцию router
	
})();