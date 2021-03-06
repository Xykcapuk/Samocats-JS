// Импортируем стили
import './home.css' // Импортировали home.css

// Создаем отдельную функцию homePage
function homePage() {
  // Создаем переменную и добавляем данные в HTML
  const htmlHome = `
		<div class="home-container">
			<img class="home-element__img" src="https://i.ibb.co/kQY0r8J/logo1.jpg"  alt="логотип"/>
			<span class="home-element__h1"> Добро пожаловать на Samocat.ru </span>
			<div class="form-container">
				<form class="element-container__form">
					<p class="element-container__email">
						<input type="text" name="email" value="Введите E-mail" />
					</p>
					
					<p class="element-container__password">
						<input type="text" name="password" value="Введите пароль" />
					 </p>
			
					<p class="element-container__logIn" >
						<a data-link="true" href="/catalog" >
							<button class="element-container__btn">Войти/Регистрация</button>
						</a>
					</p>
					
					<a data-link="true" href="">
						<span class="element-container__forgetPassword">Забыли пароль?</span>
					</a>
					
					<a data-link="true" href="/admin">
						<span class="element-container__admin">Админ</span>
					</a>   			
				</form>
			</div>
		</div>
	`
  return htmlHome
}

import footer from '../Components/footer/footer.js'

export default function render(container) {
  container.innerHTML = `<div>${homePage()}</div>`
  container.innerHTML += footer()
}