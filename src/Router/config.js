// Router 
export default [ // экспортируем файлы по умолчанию, чтобы потом динамически импортировать (т.е. в момент обращения) в SRC/index.js
	{
	name: 'home', //поле name
	path: '', //поле path, которое отображается после первого / в URL строке http://localhost:1234/catalog
	method: import("../Home/home.js"), 	//поле method и в него же сразу импортируем /Home/home.js 
													//для отображения на странице информации, которая там уже есть
	cache: null
	},
	{ // тоже самое
	name: 'product',
	path: 'product/:id',
	method: import("../Home/home.js"),
	cache: null
	},
	{ // тоже самое
	name: 'catalog',
	path: 'catalog', // http://localhost:1234/catalog
	method: import("../Catalog/catalog.js"),
	cache: null
	}
]