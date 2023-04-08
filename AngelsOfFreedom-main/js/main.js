function myFunction() {
  var input = document.getElementById('money').value;
  
  
  
var div = document.createElement('div');
div.setAttribute('class', 'money-value');
div.innerHTML = input;
document.getElementById('confirmation').appendChild(div);

var fname = document.getElementById('fName1').value;
var sname = document.getElementById('sName1').value;
var div1 = document.createElement('div');
div1.setAttribute('class', 'first-name');
div1.innerHTML = fname + " " + sname;

document.getElementById('modal-content-mention').appendChild(div1);
}
function sent(){
	var div = document.createElement('div');
div.setAttribute('class', 'sent');
div.innerHTML = '<div class="container">Отправлено</div>';
document.getElementById('install').appendChild(div);
}
function volunt(){
	var div = document.createElement('div');
div.setAttribute('class', 'sent');
div.innerHTML = '<div class="container">Отправлено</div>';
document.getElementById('volunt').appendChild(div);
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const schname = urlParams.get('schname')
const fullname = urlParams.get('fullname')
if(schname!=null){
	sent();
}
if(fullname!=null){
	volunt();
}
const input = document.getElementById("credit-card-input");
input.addEventListener("input", () => input.value = formatNumber(input.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");
