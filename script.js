function compute(){	
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
	var n = document.getElementById("years").value;
	var si = parseInt((p*n*r)/100);
	var a= parseInt(n,16);
	document.querySelector('#num2 mark').textContent = p+",";
	document.getElementById('num02').innerHTML = "If you deposit ";
	document.querySelector('#num1 mark').textContent = r+".";
	document.getElementById ('num01').innerHTML ="at an interest rate of ";
	document.querySelector('#num mark').textContent = si+",";
	document.getElementById ('num00').innerHTML = "You will recieve an amount of ";
	document.querySelector('#num3 mark').textContent = (a*1+2021)+".";
	document.getElementById ('num03').innerHTML = "in the year ";
	return true;
}
function checkdata()
{
	var p = document.getElementById("principal");
    if (p.value == ""){
    alert("Please enter the principal amount!");
    p.focus();
    return false;}
    if (p.value <= 0){
    alert("Please enter a positive amount!");
    p.focus();
    return false;	
    }
    compute();
    return true;
}
