import "./catalog.css";
import img from '../PublicPhoto/mechanism/bicycleCross.jpg';

const listItem = [
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

const catalogContainer = document.querySelector('#app');
export default function rednder() {
	for(let i = 0; i < listItem.length; i++) {
			catalogContainer.innerHTML += `
			<div class="card">
				<div class="imgItem"> <img src="${img}"/> </div>
				<div class="type"> ${listItem[i].type} </div>
				<div class="brand"> ${listItem[i].brand} </div>
			</div>
			` ;
	}
}