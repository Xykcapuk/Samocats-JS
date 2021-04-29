import "./catalog.css"; // Импортировали Users/catalog.css 
//import img from '/PublicPhoto/logo/logo1'; //Принудительно подвязали картинку

const listItem = [ //временный массив карточек оборудования. Ждём базу данных от бэка
		{
			type:'Велосипед',
			brand:'Cross',
			color: 'Чёрный',	
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el1',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/8KFb9xJ/bicycle-Cross.jpg'
		},
		{
			type:'Велосипед',
			brand:'Corraser',
			color: 'Сине-серый',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el2',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/6Rx750c/bicycle-Corraser.jpg'
		},
		{
			type:'Мускульный самокат',
			brand:'Exooter',
			color: 'Оранжевый',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el3',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/x1JKd57/scooter-Sport-Exooter.jpg'
		},
		{
			type:'Стантовый самокат',
			brand:'Crew',
			color: 'Чёрный',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el4',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/GQsnw0q/scooter-Sport-Crew.jpg'
		},
		{
			type:'Стантовый самокат',
			brand:'Prodigy',
			color: 'Красно-чёрный',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el5',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/4TWKJhw/scooter-Sport-Prodigy.jpg'
		},
		{
			type:'Электрический самокат',
			brand:'Inokim',
			color: 'Оранжевый',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el6',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/vhQ0CGP/electro-Scooter-Inokim.jpg'
		},
		{
			type:'Электрический самокат',
			brand:'NineBot',
			color: 'Чёрный',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el7',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/3sdryPX/electro-Scooter-Nine-Bot.jpg'
		},
		{
			type:'Электрический самокат',
			brand:'Xiaomi',
			color: 'Чёрный',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el8',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/k5wypys/electro-Scooter-Xiaomi.jpg'
		},
		{
			type:'Моноколесо',
			brand:'Solowheel',
			color: 'Чёрный',
			value: '100',
			currency: 'рублей',
			status: true,
			idKey: 'el9',
			timeRent: '',
			imgUrl: 'https://i.ibb.co/1Qzysw4/monocoleso-Solo-Wheel.jpg'
		},
		{
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
		},
];

import Balance from "/Components/balance/balance.js";

function generateCards(listItem) {
	let htmlCards = ''
	for(let i = 0; i < listItem.length; i++) { // пробегаемся по массиву оборудования
		// записываем (не перезатираем) данные в документ index.html
		htmlCards += `
			<ul class="catalog-container">
				<div class="catalog-element">
					<img class="catalog-element__img" src="${listItem[i].imgUrl}" />
					<span class="catalog-element__type"> ${listItem[i].type} </span>
					<span class="catalog-element__brand"> ${listItem[i].brand} </span>
						<a data-link="true" href="/product/${listItem[i].idKey}" >
							<button class="catalog-element__btn">Арендовать</button>
						</a>
				</div>
			</ul>
			`
	}
	return htmlCards;
}

export default async function render(container) { // Экспортировали по умолчанию функцию render с аргументом container из SRC/index.js
	container.innerHTML = await Balance();
	container.innerHTML += `<div class="wr-catalog">${generateCards(listItem)}</div>`
}
