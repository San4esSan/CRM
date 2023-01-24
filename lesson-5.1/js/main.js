'use strict'

const items = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const propsItemThree = document.querySelectorAll('.props__item_three');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemFive = document.querySelectorAll('.props__item_five');
const propsListFour = document.querySelector('.item_two .props__list .props__item_four');
const propsListTwo = document.querySelectorAll('.item_six .props__list .props__item_two');
const titleItems = document.querySelectorAll('.item__title');
const itemImage = document.querySelectorAll('.item__image');

propsItemFour[2].after(propsListFour);
propsItemTwo[7].after(propsListTwo[0],propsListTwo[1]);
propsList[3].append(...propsItemThree);
propsList[4].append(...propsItemFive);
items[3].after(items[0]);

titleItems[2].innerHTML = 'This и прототипы объектов';
titleItems[1].after(titleItems[3])
titleItems[4].after(titleItems[1])
itemImage[4].after(titleItems[4])
