import './balance.css'
import { getBalance } from '../../Api/api.js'

export default async function render() {
  return `
		<div class="balance-container">
			<span class="element-container__balance">${await getBalance()}</span>
			<span class="element-container__rubles">руб.</span>
			<a class="click_payment__icon" data-link="true" href="/payment">
			  <img class="element-container__icon" src="https://i.ibb.co/R7rN905/image.png" alt="balance" />
			</a> 
		</div>
	`
}