import './help.css'

export default function render(container) {
  container.innerHTML = `
    <div class="help-container">
      <p class="help-text"> Мы всегда рады Вам помочь, но пока не знаем как </p>
      <a data-link="true" href="/" >
							<button class="help-btn">На главную</button>
						</a>
    </div>
  `
}