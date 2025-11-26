//          VARIABLES
let input = document.getElementById('calc-display');

const buttons = document.querySelectorAll('.calc-input');
const calcForm = document.getElementById('calc-form');
const clrBtn = document.querySelector('.fa-ban');
let op = [];
const opString = '';
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		input.value = input.value + e.target.id;
	});
});

//          FUNCTIONS
function onSubmit(e) {
	e.preventDefault();
	// console.log(input.value);
	let operator = input.value.charAt(1);
	const string = input.value;
	if (string.includes('/')) {
		let index = string.indexOf('/');
		let num1 = string.slice(0, index);
		let num2 = string.slice(index + 1, string.length);
		input.value = num1 / num2;
		console.log(num1 / num2);
	} else if (string.includes('*')) {
		let index = string.indexOf('*');
		let num1 = string.slice(0, index);
		let num2 = string.slice(index + 1, string.length);
		input.value = num1 * num2;
		console.log(num1 * num2);
	} else if (string.includes('+')) {
		let index = string.indexOf('+');
		let num1 = string.slice(0, index);
		let num2 = string.slice(index + 1, string.length);
		input.value = num1 + num2;
		console.log(num1 + num2);
	} else if (string.includes('-')) {
		let index = string.indexOf('-');
		let num1 = string.slice(0, index);
		let num2 = string.slice(index + 1, string.length);
		input.value = num1 - num2;
		console.log(num1 - num2);
	}
}
function clear(e) {}

//          EVENT LISTENERS
calcForm.addEventListener('submit', onSubmit);
document.body.addEventListener('keypress', (e) => {
	input.value = input.value + e.key;
});
