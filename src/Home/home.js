import "./home.css"; // Импортировали home.css
//import img from '/PublicPhoto/logo/logo1'; // Принудительно подвязали картинку

export default function render(container) { // Экспортируем по умолчанию функцию renderHome
	
	function goToPage()
{
	var url = document.getElementById('');
	document.location.href = url.value;
}
	// В этот контейнер поместили элемент HTML-документа <h1> Home </h1>
	container.innerHTML = ` 
	<div class="home-container">
		<img class="home-element__img"src="https://i.ibb.co/kQY0r8J/logo1.jpg" />
		<span class="home-element__h1"> Добро пожаловать на Samocat.ru </span>
			<a data-link="true" href="./">
				<button class="home-element__btn">Перейти в каталог</button>
			</a>
	</div>
	`
}



//<span class="home-element__text2"> или </span>
//<button class="home-element__reg">Зарегистрируйтесь</button> 
//<span class="home-element__text"> Для продолжения </span>