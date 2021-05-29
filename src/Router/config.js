export default [
  {
    title: 'Samocat.ru', // поле title
    name: 'home', // поле name
    path: '', // поле path, которое отображается после первого / в URL строке http://localhost:1234/catalog
    page: import('../Home/home.js'), 	// поле method и в него же сразу импортируем /Home/home.js для отображения на странице информации, которая там уже есть
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'product',
    path: 'product/:id',
    page: import('../Products/products.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'catalog',
    path: 'catalog',
    page: import('../Catalog/catalog.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'footer',
    path: 'footer',
    page: import('../Components/footer/footer.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'help',
    path: 'help',
    page: import('../RulesHelps/Helps/help'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'rules',
    path: 'rules',
    page: import('../RulesHelps/Rules/rules.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'admin',
    path: 'admin',
    page: import('../Admin/admin.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'payment',
    path: 'payment',
    page: import('../Payment/payment.js'),
    cache: null
  },
  {
    title: 'Samocat.ru',
    name: 'endRentPage',
    path: 'endRentPage',
    page: import('../EndRent/endRentPage.js'),
    cache: null
  }
]