
fetch("https://love-calculator.p.rapidapi.com/getPercentage?sname=SmrityMondal&fname=AyonJodder", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "fdab746e91msh396c32ae260aa5bp147ce3jsn1357eb1a5bad"
	}
})
    .then(res => res.json())
    .then(data => console.log(data))