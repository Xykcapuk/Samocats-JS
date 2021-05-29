import './endRentPage.css'
import footer from '../Components/footer/footer'

function endRentPage() {
  const endRentPage = `
    <div class="container">
      <h1>Аренда завершена</h1>
      <p>Ждем Вас снова!</p>
    </div>
  `
  return endRentPage
}

export default function render(container) {
  container.innerHTML += `<div>${endRentPage()}</div>`
  container.innerHTML += footer()
}