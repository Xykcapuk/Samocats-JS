import './product.css'
import Balance from '/Components/balance/balance.js'
import footer from '/Components/footer/footer.js'
// import axios from 'axios'
import { getProduct } from '../Api/api'

export default async function render(container, slug) {
  container.innerHTML = await Balance()
  const id = slug[1]
  const product = await getProduct(id)
  if (typeof product !== 'object') {
    history.pushState(null, null, '/404')
    console.log('ERROR')
  }
  let statusRent = false // product.status
  container.innerHTML += `
		<div class="element-container">
			<img class="element-container__img" src="${product.imgUrl}" />
			<span class="element-container__type"> ${product.typeName} </span>
			<span class="element-container__brand"> ${product.brand} </span>
			<button class="rent-button">qeqfq</button>
			<a data-link="true" href="/endRentPage">
				<button class="">Завершить</button>
			</a>
	`
  const rentBtn = container.querySelector('.rent-button')
  rentBtn.onclick = (event) => {
    console.log('!!!!')
    if (statusRent) { // if (product.status)
      event.value = 'Завершить аренду'
      // history.pushState(null, null, a.href)
      console.log('111')
    } else event.value = 'Начать аренду'
    statusRent = !statusRent
  }
  console.dir(rentBtn)
  container.innerHTML += footer()
}