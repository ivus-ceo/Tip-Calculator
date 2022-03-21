window.addEventListener('load', () => {
	inputRangeTooltip();
});

function inputRangeTooltip() {
	const inputs = document.querySelectorAll('.input-container input[type=range]');

	inputs.forEach((input) => {
		this.addEventListener('input', (e) => {
			console.log(e);
		});
	});
}
