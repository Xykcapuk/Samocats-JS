import "./home.css"; // Импортировали home.css
import img from '../PublicPhoto/mechanism/bicycleCross.jpg'; // Принудительно подвязали картинку

export default function render(wraper) { // Экспортируем по умолчанию функцию renderHome
	
	// В этот контейнер поместили элемент HTML-документа <h1> Home </h1>
	wraper.innerHTML = ` 
		<div>
			<h1>Добро пожаловать на Самокат.ru</h1>
			<p> Здесь Вы сможете взять в аренду транспортное средство для удобного передвижения по Вашему городу. Для это просто нажмите кнопку "Погнали"</p>
			</div>
			<div class="imgItem"> <img src="${img}"/> </div>
			<div>
			<a href="/catalog" data-link="true">
				<button>Погнали</button>
			</a>
			
		</div>
			`
}