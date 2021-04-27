export default async function render() {

	//const res = await fetch("http://localhost:8080/get-balance");
	let response = await fetch('http://localhost:1234', );

	const json = await response;

	return `<h1>balance</h1>`
	
}
