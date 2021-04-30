// Импортируем стили
import "./balance.css"
// Создаем дефолтную асинхронную функцию render
export default async function render() {

	// Возвращаем данные для HTML и дальнейшего вызова на страницах

	return `
		<div class="balance-container">
			<span class="element-container__balance">100</span>
			<span class="element-container__rubles">руб.</span>
			<img class="element-container__icon" src="https://i.ibb.co/R7rN905/image.png" alt="balance" />
		</div>
	`
}