var slider1 = document.getElementById("rate");
var output =document.getElementById("values");

output.innerHTML = slider1.value;
slider1.oninput = function(){
	output.innerHTML = this.value+" %";
}

function compute(){	
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
	var n = document.getElementById("years").value;
	var si = p * n * r / 100;
	var year = new Date().getFullYear()+parseInt(n);;
	document.querySelector('#num2 mark').textContent = p+",";
	document.getElementById('num02').innerHTML = "If you deposit ";
	document.querySelector('#num1 mark').textContent = r+".";
	document.getElementById ('num01').innerHTML ="at an interest rate of ";
	document.querySelector('#num mark').textContent = si+",";
	document.getElementById ('num00').innerHTML = "You will recieve an amount of ";
	document.querySelector('#num3 mark').textContent = year+".";
	document.getElementById ('num03').innerHTML = "in the year ";
	return true;
}

function checkdata()
{
	var p = document.getElementById("principal");
    if (p.value <= 0 || p.value == ""){
    alert("Please enter a positive number!");
    p.focus();
    return false;	
    }
    compute();
    return true;
}

