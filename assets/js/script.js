var symbol = '+' ;
var a = 0;
var b = 0;
var screen = document.getElementById('screen');
var result = 0;

function clearScreen() {
	screen.innerText = "0";
}

function addView(value) {
	if(screen.innerText == 0)
		screen.innerText = value;
	else if(value >= 0 && value <= 9)
		screen.innerText += value;
	else{	
		screen.innerText += value;
		symbol = value;
	}
}

function solve() {
	debugger;
	var str = screen.innerText;
	a = Number(str.substring(0,str.indexOf(symbol)));
	b = Number(str.substring(str.indexOf(symbol)+1));
	operation(a,b);
	setView();
}

function operation(a,b) {
	if(symbol === '+')
		result = a+b;
	else if(symbol === '-')
		result = a-b;
	else if(symbol === '*')
		result = a*b;
	else if(symbol === '/')
	{
		if(b == 0)
			result = "b is zero. Error!!!";
		else
			result = a/b;
	}
	else
		result = "unknown symbol";
}

function setView() {
	screen.innerText += " = "+result;
}