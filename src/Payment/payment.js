import './payment.css'
import footer from '../Components/footer/footer'

function paymentPage() {
  const paymentPage = `
    <div class="pay_page">
      
      <div class="balance">
        <p>Ваш баланс: 100 рублей</p>
      </div>
        
      <div class="payment">
        <p>Способ оплаты</p>
          <div class="card">
            <label>Банковская карта</label>
            <p>Без привязки. Комиссия 0,7-1,0% минимум 5 руб.</p>
            <img class="element-container__icon" src="https://i.ibb.co/nC1fFhq/15-creditcard-cat-icon-icons-com-76691.png" alt="balance" />
          </div>
      </div>
      
      <div class="commission">
        <label>Введите суммы пополнения</label>
        <input type="number" name="sum"/>
      </div>
      
      <div class="button">
        <button onclick="alert('Отлично! Баланс пополнен')">Пополнить баланс</button>
        <a data-link="true" href="/catalog">
					<button class="element-container__admin">В Каталог</button>
				</a>
      </div>
      
    </div>  
  `
  return paymentPage
}

export default function render(container) {
  container.innerHTML += `<div>${paymentPage()}</div>`
  container.innerHTML += footer()
}