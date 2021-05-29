// Экспортировали по умолчанию функцию catchLink
export default function catchLink(container, router) {
  // Реализация кнопки назад в браузере
  window.addEventListener('popstate', (event) => {
    // отлов ошибки 404
    console.log(event)
    router(container)
  }, false)
  window.addEventListener('replaceState', function(event) {
    console.log(event)
  })

  // Добавили возможность клика на весь Container карточки
  container.onclick = (ev) => {
    const a = ev.target.closest('a') // где был клик
    if (a && a.dataset.link) { // обращение к атрибуту "data-link" в catalog.js. Если это наша внутренняя ссылка, мы ее блокируем и обрабатываем по своему
      ev.preventDefault() // отмена перезагрузки страницы
      history.pushState(null, null, a.href)
      // отображение пути в URL-строке
      router(container) // вызов метода Router с параметром Container для дальнейшего вызова router на нужных страницах
    }
  }
}