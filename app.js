//Getting Input value
function getInput(inputId) {
	const inputField = document.getElementById(inputId);
	const inputValue = inputField.value;
	return inputValue;
}
//Adding listener for button and then build the url based on input and fetch data from server
const button = document.getElementById('btn');
button.addEventListener('click', () => {
	const yourName = getInput('fname');
	const partnerName = getInput('sname');
	const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${partnerName}&fname=${yourName}`
	//Clear input Field
	clear();
	fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "fdab746e91msh396c32ae260aa5bp147ce3jsn1357eb1a5bad"
	}
})
    .then(res => res.json())
    .then(data => toDoData(data))
})
//Updating innerHtml based on data
function toDoData(data) {
	console.log(data)
	const innerContent = document.getElementById('inner-content');
	innerContent.innerHTML = `
		<h1 class="py-3 text-lg font-bold">Your Name: <span class="text-teal-500">${data.fname}</span></h1>
		<h1 class="py-3 text-lg font-bold">Your Partner Name: <span class="text-teal-500">${data.sname}</span></h1>
		<h1 class="py-3 text-lg font-bold">Love Parcentage: <span class="text-teal-500">${data.percentage}%</span></h1>
		<h1 class="py-3 text-lg font-bold">Your Next Step: <span class="text-teal-500">${data.result}</span></h1>
	`
}
//clearing input Field
const clear = () => {
	const input = Array.from(document.querySelectorAll('input'));
	input.forEach(e => {
		e.value = ''
	})
}












