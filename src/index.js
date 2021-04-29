import "./styles.css"; // Импортировали SRC/catalog.css 
import catchLink from './Utils/catchLink'; // Импортировали из Utils/catchLink.js
import router from './Router/index';

(async() => { // создали асинхронную функцию

	const container = document.querySelector('#container'); // Создали сontainer и вернули все элементы, находящиеся в #app	
	catchLink(container, router); // вызываем метод catchLink с аргументами container и router, в которые внесли новые данные
	await router(container); // вызываем асинхронную функцию router
	
})();