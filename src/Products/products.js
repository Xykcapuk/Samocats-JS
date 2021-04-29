import "./product.css";
import Balance from "/Components/balance/balance.js";

export default async function render(container) { // Экспортировали по умолчанию функцию render с аргументом container из SRC/index.js
	
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

	container.innerHTML = await Balance();
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
}