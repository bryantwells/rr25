document.querySelectorAll('table').forEach((table) => {
	const thead = table.querySelector('thead');
	const tbody = table.querySelector('tbody');
	toggle();
	toggle();
	thead.addEventListener('click', () => {
		toggle();
	});
	function toggle() {
		tbody.style.display = (tbody.style.display == 'none')
			? ''
			: 'none';
		thead.dataset.open = !(tbody.style.display == 'none');
	}
});