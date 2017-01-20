secshand = document.querySelector('.secondshand');
minshand = document.querySelector('.minshand');
hourshand = document.querySelector('.hourshand');



function currendate()
{
	var current = new Date();
	var seconds = current.getSeconds();
	var secondsdegree = ((seconds/60)*360)+90;
	secshand.style.transform = `rotate(${secondsdegree}deg)`;

	var mins = current.getMinutes();
	var minsdegree = ((mins/60)*360)+90;
	minshand.style.transform = `rotate(${minsdegree}deg)`;

	var hours = current.getHours();
	var hoursdegree = ((hours/12)*360)+90;
	hourshand.style.transform = `rotate(${hoursdegree}deg)`; 

}
setInterval(currendate,1000)