import "./product.css";
import Balance from "/Components/balance/balance.js";

function chooseProduct () {
	for (let i = 0; i < listItem.length; i++) {
		let product = listItem[i];
		
	}
}

export default async function render(container) { // Экспортировали по умолчанию функцию render с аргументом container из SRC/index.js

	container.innerHTML = await Balance();
	let wr = document.createElement('div');
	wr.className = 'wr-catalog';
	container.append(wr);

	for(let i = 0; i < listItem.length; i++) { // пробегаемся по массиву оборудования
		// записываем (не перезатираем) данные в документ index.html
		//if (listItem[i] == listItem[i].idKey)
		//	let product = '';
		wr.innerHTML += `
			<ul class="catalog-container">
				<div class="catalog-element">
					<img class="catalog-element__img"src="${listItem[i].imgUrl}" />
					<span class="catalog-element__type"> ${listItem[i].type} </span>
					<span class="catalog-element__brand"> ${listItem[i].brand} </span>
						<a data-link="true" href="/product/${listItem[i].idKey}" >
							<button class="catalog-element__btn">Арендовать</button>
						</a>
				</div>
			</ul>
			` ;
	} 	/* на 122 строке - в data-link записываем ссылку на продукт по idKey
			на 123 строке - добавляем картинку оборудования на страницу 
			на 124 строке - добавляем тип оборудования на страницу 
			на 125 строке - добавляем бренд оборудования на страницу 
	*/
}