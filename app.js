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
	if (yourName === '' || partnerName === '' || typeof (yourName) === undefined) {
		alert('fggf')
	} else {
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
	}
});
//Updating innerHtml based on data
function toDoData(data) {
	const innerContent = document.getElementById('inner-content');
	const suggestion = document.getElementById('suggestion');
	const suggestionDiv = document.getElementById('suggestionDiv');
	const full = document.getElementById('full');
	const percentage = data.percentage;
	if (percentage <= 10) {
		suggestionDiv.classList.add('suggestionDiv');
		
		suggestion.innerText = `পথের শেষে এসে দেখি অনেক হিসাব বাকি-
		সারাজীবন যা করেছি তার পুরোটাই ফাঁকি`
	} else if (percentage > 10 && percentage <= 30) {
		suggestionDiv.classList.add('suggestionDiv');
		
		suggestion.innerText = `কাউকে আবেগের ভালোবাসা দিওনা,মনের ভালোবাসা দিও |
		কারণ আবেগের ভালোবাসা একদিন বিবেকের কাছে হেরে যাবে-
		কিন্তু মনের ভালোবসা চিরদিনই থেকে যাবে |`
	} else if (percentage > 30 && percentage <= 50) {
		suggestionDiv.classList.add('suggestionDiv');
		
		suggestion.innerText = `আজ এই দিনটাকে মনের খাতায় লিখে রাখো,
		আমায় পড়বে মনে কাছে দূরে যেখানেই থাকো |`
	} else if (percentage > 50 && percentage <= 100) {
		suggestionDiv.classList.add('suggestionDiv');
		full.classList.remove('full');
		suggestion.innerText = `যতো ভালবাসা পেয়েছি তোমার কাছ থেকে।
		দুষ্টু এই মন চায়, আরো বেশি পেতে।কি জানি,
		তোমার মধ্যে কি আছে, কেনো যে এ মন চায়,
		তোমাকে আরো বেশি করে কাছে পেতে। |`
	}
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












