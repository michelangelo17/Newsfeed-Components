/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker(arr) {
  //create element tool
  const create = element => document.createElement(element);
  //append to menu div tool
  const add = (parent, element) => parent.appendChild(element);
  //create elements
  const menu = create('div');
  const list = create('ul');
  //add class
  menu.classList.add('menu');
  //append to menu
  add(menu, list);
  //creating, adding content and appending menu items using forEach
  arr.forEach(item => {
    const menuItem = create('li');
    menuItem.textContent = item;
    add(list, menuItem);
  });
  //add event listener on menu button to open and close menu
  document.querySelector('.menu-button').addEventListener('click', () => menu.classList.toggle('menu--open'));
  return menu;
}
//add menu to div with class header
document.querySelector('.header').appendChild(menuMaker(menuItems));

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
