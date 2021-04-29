// Импортируем стили
import "./footer.css"
// Создаем дефолтную функцию render
export default function render() {
  // Возвращаем данные для HTML и дальнейшего вызова на страницах
  return `
    <div class="footer-container">
        <a data-link="true" href="" class="element-container__rules">Правила</a>
        <a data-link="true" href="" class="element-container__help">Помощь</a>
    </div>
  `
}