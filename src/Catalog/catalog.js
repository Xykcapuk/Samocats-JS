import "./catalog.css"; // Импортировали Users/catalog.css 
import img from '../PublicPhoto/mechanism/bicycleCross.jpg'; //Принудительно подвязали картинку

const listItem = [ //временный массив карточек оборудования. Ждём базу данных от бэка
	{
		type:'Велосипед',
		brand:'Cross',
		color: 'Чёрный',	
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: ''
	},
	{
		type:'Велосипед',
		brand:'Corraser',
		color: 'Сине-серый',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/bicycleCross.jpg'
	},
	{
		type:'Мускульный самокат',
		brand:'Exooter',
		color: 'Оранжевый',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/scooterSportExooter.jpg'
	},
	{
		type:'Стантовый самокат',
		brand:'Crew',
		color: 'Чёрный',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/scooterSportCrew.jpg'
	},
	{
		type:'Стантовый самокат',
		brand:'Prodigy',
		color: 'Красно-чёрный',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/scooterSportProdigy.jpg'
	},
	{
		type:'Электрический самокат',
		brand:'Inokim',
		color: 'Оранжевый',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/electroScooterInokim.jpg'
	},
	{
		type:'Электрический самокат',
		brand:'NineBot',
		color: 'Чёрный',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/electroScooterNineBot.jpg'
	},
	{
		type:'Электрический самокат',
		brand:'Xiaomi',
		color: 'Чёрный',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/electroScooterXiaomi.jpg'
	},
	{
		type:'Моноколесо',
		brand:'Solowheel',
		color: 'Чёрный',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/monocolesoSoloWheel.jpg'
	},
	{
		type:'Моноколесо',
		brand:'Fastwheel',
		color: 'Белый',
		nameValue: 'Стоимость',
		value: '100',
		currency: 'рублей',
		status: true,
		idKey: '123hgf',
		timeRent: '',
		imgUrl: './PublicPhoto/mechanism/monocolesoFastWheel.jpg'
	},
];

export default function render(wraper) { // Экспортировали по умолчанию функцию rednder с аргументом container из SRC/index.js

	for(let i = 0; i < listItem.length; i++) { // пробегаемся по массиву оборудования
		// записываем (не перезатираем) данные в документ index.html
		wraper.innerHTML += `
			<a data-link="true" href="/product/${listItem[i].idKey}" class="card">
			<div class="imgItem"> <img src="${img}"/> </div>
				<div class="type"> ${listItem[i].type} </div>
				<div class="brand"> ${listItem[i].brand} </div>
			</a>
			` ;
	} 	/* на 122 строке - в data-link записываем ссылку на продукт по idKey
			на 123 строке - добавляем картинку оборудования на страницу 
			на 124 строке - добавляем тип оборудования на страницу 
			на 125 строке - добавляем бренд оборудования на страницу 
	*/
}