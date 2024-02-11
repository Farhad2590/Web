const placelist =document.getElementById('cars');
// console.log(placelist);
const li = document.createElement('li');
li.innerText = "tesla";

placelist.appendChild(li)

const maincontainer = document.getElementById('main');

const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'New Bikes'
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = "fz";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "honda";
ul.appendChild(li2);

maincontainer.appendChild(section)

// setInnerhtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML =`
<h1> My New Dresses</h1>
<ul>
<li>T-shirt </li>
<li>Shirt </li>
<li>Pant </li>
</ul>

`

maincontainer.appendChild(sectionDress);