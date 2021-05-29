import routes from './config.js'

export default async function router(container) {
  const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '')
  for (const route of routes) {
    try {
      // Создаем переменную reg в неё записываем данные, полученные в результате выполнения метода RegExp
      // То есть ищем нужные символы пробегаясь по значениям searchValue в поле path, которые записан в config.js и меняем на значение replaceValue
      const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$')
      // в переменную slug записываем массив с помощью match, а данные в массив получаем из переменной reg
      const slug = currentPath.match(reg)
      // Проверяем, если slug не пустой
      if (slug) {
        // то проверяем, если route.cache не пустой
        if (route.cache === null) {
          // записываем с ожиданием страницу из Router/config.js
          route.cache = await route.page
        }

        // Записываем в основной контейнер сначала пустую HTML
        container.innerHTML = ''
        // Присваиваем класс с именем к каждой страницы
        container.className = route.name
        // Именуем каждую вкладку
        document.title = route.title
        // Вызываем дефолтную функцию с cache к основному контейнеру
        route.cache.default(container, slug) // у m вызываем метод по умолчанию с аргументом container (#app)
      }

      // если try не выполнился, то ловим ошибку
    } catch (err) {
      console.log(err)
    }
  }
}
