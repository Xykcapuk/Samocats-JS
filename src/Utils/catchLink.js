export default function catchLink(container, router) {
	container.onclick = (ev) => {
		const a = ev.target.closest('a');
		if (a && a.dataset.link) {
			ev.preventDefault();
			history.pushState(null, null, a.href); 
			console.log(a);
			router();
		}
	}
}