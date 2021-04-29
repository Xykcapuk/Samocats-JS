import "./balance.css"

export default async function render() {

	return `
		<div class="balance-container">
			<span class="element-container__balance">100</span>
			<span class="element-container__rubles">руб.</span>
			<img class="element-container__icon" src="https://i.ibb.co/R7rN905/image.png" alt="balance" />
		</div>
	`
}

//let response = await fetch('http://localhost:1234', );
//const json = await response;