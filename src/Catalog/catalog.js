import './catalog.css'
import Balance from '/Components/balance/balance.js'
import footer from '/Components/footer/footer.js'

function generateCards(listItem) {
  let htmlCards = ''
  for (let i = 0;i < listItem.length;i++) {
    htmlCards += `
			<ul class="catalog-container">
				<div class="catalog-element">
					<img class="catalog-element__img" src="${listItem[i].imgUrl}" />
					<span class="catalog-element__type"> ${listItem[i].typeName} </span>
					<span class="catalog-element__brand"> ${listItem[i].brand} </span>
						<a data-link="true" href="/product/${listItem[i].id}" >
							<button class="catalog-element__btn">Арендовать</button>
						</a>
				</div>
			</ul>
			`
  }
  return htmlCards
}

import { getCatalog } from '../Api/api.js'

export default async function render(container) {
  container.innerHTML = await Balance()
  const listItem = await getCatalog()
  container.innerHTML += `<div class="wr-catalog">${generateCards(listItem)}</div>`
  container.innerHTML += footer()
}