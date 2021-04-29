// Импортируем стили
import "./product.css";
// Импортируем Balance
import Balance from "/Components/balance/balance.js";
// Импортируем footer
import footer from "/Components/footer/footer.js";

// Создаем для дальнейшего импорта дифолтную асинхронную функцию для основного контейнера
export default async function render(container) {
	// Создаем переменную и кладём туда данные оборудования (принудительно)
	let result = {
		type:'Моноколесо',
		brand:'Fastwheel',
		color: 'Белый',
		nameValue: 'Стоимость',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: 'el10',
		timeRent: '',
		imgUrl: 'https://i.ibb.co/sq5SWXs/monocoleso-Fast-Wheel.jpg'
	}
	// Записываем в HTML основного контейнера с ожиданием Balance и отображаем его
	container.innerHTML = await Balance();
	// Добавляем к Balance в HTML основного контейнера данные по оборудованию
	container.innerHTML += `
		<div class="element-container">
			<img class="element-container__img"src="${result.imgUrl}" />
			<span class="element-container__type"> ${result.type} </span>
			<span class="element-container__brand"> ${result.brand} </span>
			<p>
				<a data-link="true" href="/catalog">
					<button class="element-container__btn">Начать аренду</button>
				</a>
			</p>
		</div>
	`
	// Добавляем в HTML основного контейнера footer
	container.innerHTML += footer();
}