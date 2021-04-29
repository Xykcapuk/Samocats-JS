// Router 
export default [ // экспортируем файлы по умолчанию, чтобы потом динамически импортировать (т.е. в момент обращения) в SRC/index.js
	{
		title: 'Samocat.ru',
		name: 'home', //поле name
		path: '', //поле path, которое отображается после первого / в URL строке http://localhost:1234/catalog
		page: import("../Home/home.js"), 	//поле method и в него же сразу импортируем /Home/home.js
														//для отображения на странице информации, которая там уже есть
		cache: null
	},
	{ // тоже самое
		title: 'Samocat.ru',
		name: 'product',
		path: 'product/:id',
		page: import("../Products/products.js"),
		cache: null
	},
	{ // тоже самое
		title: 'Samocat.ru',
		name: 'catalog',
		path: 'catalog', // http://localhost:1234/catalog
		page: import("../Catalog/catalog.js"),
		cache: null
	},
	// {
	// 	title: 'Samocat.ru',
	// 	name: 'footer',
	// 	path: 'footer',
	// 	page: import("../Components/footer/footer.js"),
	// 	cache: null
	// }
]