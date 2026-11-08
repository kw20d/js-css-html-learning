//Examine the document Object//
/*console.dir(document);
console.log(document.url);
console.log(document.title);
document.title = 123;
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.links);
console.log(document.images);*/

//Get element by ID//
/*
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = "123";
headerTitle.innerText = "Hello";
//innertext and textContent do the
same thing except that innerText 
works with the styling//
headerTitle.innerHTML = '<h3>123<h3/>';
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
*/

//Get elements by class name//
/* 
let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'bruh';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//To change the bg color of each 
item in the class//
for(let i = 0; i < items.length; i++)
{
   items[i].style.backgroundColor = '#f4f4f4'; 
}
*/

//Get elements by Tag name//
/* 
let li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'bruh';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(let i = 0; i < li.length; i++)
{
   li[i].style.backgroundColor = '#f4f4f4'; 
} */

//Query slector//
/*
let header = document.querySelector('#header-title');
header.style.fontWeight = 'bold'; 
 
let input = document.querySelector('input');
input.value = "enter an item";

let submit = document.querySelector('input[type = submit]');
submit.value = "Add";

let item = document.querySelector('.list-group-item');
item.textContent = input.value;

let Seconditem = document.querySelector('.list-group-item:nth-child(2)');
Seconditem.textContent = input.value;

let Thirditem = document.querySelector('.list-group-item:nth-child(3)');
Thirditem.textContent = input.value;

let Lastitem = document.querySelector('.list-group-item:last-child');
Lastitem.textContent = input.value;
*/

//Query slector all//
/*
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i < odd.length; i++)
   odd[i].style.backgroundColor = '#f4f4f4';

let even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0; i < even.length; i++)
   even[i].style.backgroundColor = '#ffd3d3';
*/

/*
//Travesing the DOM//
let itemList = document.querySelector('#items');
//Parent Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//Parent Element//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//Child Nodes//
console.log(itemList.childNodes);

//Children
console.log(itemList.children);

//Specific Child
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = '#f4f4f4';
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

//Siblings
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);

//Create element
let newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add id
newDiv.id = 'hello1';
//Add attr
newDiv.setAttribute('title', 'Hello Div');
//Create text node
let newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);
//Add our div to the DOM
let countainer = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
countainer.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = 'bold';
console.log(newDiv);
*/

const counterDisplay = document.getElementById('counter-badge');
let currentItems = document.querySelectorAll('.list-group-item');
let updateUi = () => {
   const freshItems = document.querySelectorAll('.list-group-item');
   counterDisplay.textContent = freshItems.length;
};

let clickCount = 0;
let list = document.getElementById('items');
let input = document.querySelector('input');
let buttonClick = () => {
   if(input.value === "")
   {
      return;
   }
   currentItems = document.querySelectorAll('.list-group-item');
   if(clickCount >= currentItems.length)
   {
      let newSpace = document.createElement('li');
      newSpace.textContent = input.value;
      newSpace.className = 'list-group-item';
      newSpace.setAttribute('onclick', 'deleteItem(this)');
      list.appendChild(newSpace);
      clickCount++;
   }
   else if (currentItems[clickCount])
   {
      currentItems[clickCount].textContent = input.value;
      console.log("Button Clicked")
      clickCount++;
   }
   else
   {
      let newSpace = document.createElement('li');
      newSpace.textContent = input.value;
      newSpace.className = 'list-group-item';
      newSpace.setAttribute('onclick', 'deleteItem(this)');
      list.appendChild(newSpace);
   }
   updateUi();
};
input.addEventListener('keydown', (event) => {
   if(event.key === 'Enter')
   {   
      event.preventDefault(); 
      buttonClick();
   }
});
let button = document.getElementById('button').addEventListener
('click', buttonClick);

let deleteItem = (item) => {
   item.remove();
   if(clickCount != 0)
      clickCount--;
   //currentItems = document.querySelectorAll('.list-group-item');
   updateUi();
}
/*
let spaceAdd = () => {
   let newSpace = document.createElement('li');
   newSpace.textContent = newSpace.textContent = "Item " + (list.children.length + 1);
   newSpace.className = 'list-group-item';
   list.appendChild(newSpace);
};
let Addspace = document.getElementById('space').addEventListener
('click', spaceAdd);
*/