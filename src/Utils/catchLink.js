export default function catchLink(container, router) { //Экспортировали по умолчанию функцию catchLink
	
	window.addEventListener('popstate', () => {
		router(container)
	}, false)

	container.onclick = (ev) => { // добавили возможность клика на весь Container карточки
		const a = ev.target.closest('a'); // где был клик
		if (a && a.dataset.link) { //обращение к атрибуту "datalink" в catalog.js. Если это наша внтренняя ссылка, мы ее нужно блокируем и обрабатываем по своему
			ev.preventDefault(); // отмена действия браузера на клик (без перезагрузки страницы)
			history.pushState(null, null, a.href); // отображение пути в URL-строке
			console.log(a);
			router(container); // вызов метода Router
		}
	}
}