"use strict"

const tabs = document.querySelectorAll('.tab');
let arrayTabs = Array.from(tabs);
console.log(arrayTabs);
const contents = document.querySelectorAll('.tab__content');
let arrayContents = Array.from(contents);

let tabIndex = arrayTabs.findIndex(elem => elem.classList.contains("tab_active"));

console.log(arrayTabs[tabIndex]);

function change(tabIndex) {
    console.log(tabIndex);
    arrayTabs[tabIndex].classList.toggle("tab_active");
    arrayContents[tabIndex].classList.toggle("tab__content_active");
}

function getTab(event) {
    change(tabIndex);
    tabIndex = arrayTabs.indexOf(event.target);
    change(tabIndex);
}

for (let i = 0; i < arrayTabs.length; i++) {
    arrayTabs[i].addEventListener("click", getTab);
}
