let sum = 0;

// Create element
const parent = document.getElementById('parent')

const minus = document.createElement('div');
minus.setAttribute("id", "preference-c");
minus.setAttribute("onclick", "deletePref()");
minus.setAttribute("class", "preferences-button")
minus.innerHTML=`
                -
              `

const el = document.createElement('select');
el.setAttribute("for","creator-form");
el.setAttribute("name","select-preferences")

const button = document.createElement('div');
button.setAttribute("id", "preference-b");
button.setAttribute("onclick", "myFunction()");
button.setAttribute("class", "preferences-button");






function myFunction(){
  document.getElementById("preference-b").outerHTML = "";
  const node = box.lastElementChild;
  const clone = node.cloneNode(true);
  var count =  1;
  sum+=count;
  console.log('count = '+ count);
  console.log(sum);
  if(sum==1){
    parent.appendChild(minus);
  }
  console.log(node);
  box.appendChild(clone);
  box.appendChild(button);
}

function deletePref(){
  const node = box.lastChild.previousSibling;
  node.remove();
  var count = -1;
  sum+=count;
  console.log('count = '+ count);
  console.log(sum);
  if(sum==0){
    document.getElementById("preference-c").outerHTML = "";
  }
}

// Add text content to the element
const elselect = `
              <option value="no">Нет</option>
              <option value="onions">Без лука</option>
              <option value="spicy">Не острое</option>
              <option value="sour">Не кислое</option>
              <option value="nuts">Без орехов</option>
              <option value="lactose">Без лактозы</option>
              <option value="gluten">Без глютена</option>
            
            `;
button.innerHTML = `
              +
            `
// add element to DOM
const box = document.getElementById('creator-preferences');

const $1 = document.getElementById('1');
const classes1 = $1.classList;
const $2 = document.getElementById('2');
const classes2 = $2.classList;
const $3 = document.getElementById('3');
const classes3 = $3.classList;
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
slide1.setAttribute("style", "display:block");
slide2.setAttribute("style", "display:none");
slide3.setAttribute("style", "display:none");
function button_toggle(){
  classes1.add('clicked');
  slide1.setAttribute("style", "display:block");
  slide2.setAttribute("style", "display:none");
  slide3.setAttribute("style", "display:none");
  $2.setAttribute("class", "slide-button");
  $3.setAttribute("class", "slide-button");
}
function button_toggle1(){
  classes2.add('clicked');
  slide1.setAttribute("style", "display:none");
  slide2.setAttribute("style", "display:block");
  slide3.setAttribute("style", "display:none");
  $1.setAttribute("class", "slide-button");
  $3.setAttribute("class", "slide-button");
}
function button_toggle2(){
  classes3.add('clicked');
  slide1.setAttribute("style", "display:none");
  slide2.setAttribute("style", "display:none");
  slide3.setAttribute("style", "display:block");
  $2.setAttribute("class", "slide-button");
  $1.setAttribute("class", "slide-button");
}


function myFunction(){
  const product = document.createElement('a');
  product.setAttribute("href", "#ex1");
  product.setAttribute("rel", "modal:open");
  product.setAttribute("class", "result");
product.setAttribute("style", "position:absolute; background-color:#EEEEEE");
    product.setAttribute("id", "aaaaa");
    product.setAttribute("onclick", "func()");
  product.innerHTML=`
  <div class="result-image">
    <img src="img/breakfast.png">
  </div>
  <div class="result-text">
      <div class="result-title">Breakfast</div>
      <div class="result-subtitle">Gluten-Free Pancakes with Maple Syrup and Fresh Fruit
  </div>
  </div>
  `

  document.getElementById('searchform').appendChild(product);
}
function func(){
  const product = document.getElementById('aaaaa');
  product.outerHTML="";
}
