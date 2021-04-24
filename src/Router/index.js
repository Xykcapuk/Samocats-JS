import routes from './config';

export default async function router(container) { // вызвали функцию router из Router/config.js
	const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '');
	/*	decodeURI - декодирует URL-адрес целиком. Не совсем понятно((
		toString() - преобразовывает символы в URL строке (:, ?, =, &, #) в строки
		replace - что-то заменяем, а что не понятно(
	*/

	for (const route of routes) { // делаем цикл, где в route помещаем данные, взятые у routers
		try { // конструкция try catch для обработки ошибок с await
			const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$'); // записываем в reg совпадения и меняем их
			const slug = currentPath.match(reg); 	// записываем в partPath вызываемый математический метод у currentPath с аргументом reg, 
																	// записанный в результате выполнения 29 строки
			if (slug) { // создаем условие, если partPath == true
				// route.name;
				if (route.cache === null) {
					route.cache = await route.method; // записываем в переменную m ожидание route у которого вызываем method
					//debugger
				}
				container.innerHTML = '';
				container.className = route.name;
				document.title = route.name;
				route.cache.default(container); // у m вызываем метод по умолчанию с аргументом container (#app)
			}
		} catch (err) { // в данном случаем выведем ошибку в консоль
			console.log(err); // вывод в консоль
		}
	}
}