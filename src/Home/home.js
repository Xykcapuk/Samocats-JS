import "./home.css"; // Импортировали home.css

// function homePage() {
// 	let footerEl = ''
//
// 	return footerEl;
// }

export default function render(container) { // Экспортируем по умолчанию функцию renderHome
	container.innerHTML = ` 
		<div class="home-container">
			<img class="home-element__img" src="https://i.ibb.co/kQY0r8J/logo1.jpg"  alt="логотип"/>
			<span class="home-element__h1"> Добро пожаловать на Samocat.ru </span>
			<div id="form-container">
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
				</form>
			</div>
		</div>
		`
	//container.innerHTML = footer();
	//container.innerHTML = `<div>${homePage()}</div>`
}
//import footer from "../Components/footer/footer.js";


//<a data-link="true" href="/catalog">
//<button class="home-element__btn">Перейти в каталог</button>
//</a>