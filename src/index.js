// Импортируем стили
import "./styles.css";
// Импортируем catchLink
import catchLink from './Utils/catchLink';
// Импортируем router
import router from './Router/index';

// Создаём асинхронную функцию
(async() => {
	//  Создаем переменную сontainer и возвращаем в нее все данные, которые передаем в основной контейнер
	const container = document.querySelector('#container');
	// Вызываем catchLink
	catchLink(container, router);
	// Вызываем с ожиданием router
	await router(container);
})();