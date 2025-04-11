document.querySelectorAll('table').forEach((table) => {
	const thead = table.querySelector('thead');
	const tbody = table.querySelector('tbody');
	toggle();
	// toggle();
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

document.querySelectorAll('img').forEach((img) => {
	img.addEventListener('click', () => {
		window.open(img.src, '_blank', 'width=700,height=700');
	});
});

document.querySelectorAll('.task-list-item-checkbox').forEach((checkbox) => {
	checkbox.disabled = false;
});