"use strict"
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    let arrayTabs = Array.from(tabs);
    const contents = document.querySelectorAll('.tab__content');
    let arrayContents = Array.from(contents);

    let tabIndex = arrayTabs.findIndex(elem => elem.classList.contains("tab_active"));

    function change(tabIndex) {
        arrayTabs[tabIndex].classList.toggle("tab_active");
        arrayContents[tabIndex].classList.toggle("tab__content_active");
    }

    function getTab(index) {
        change(tabIndex);
        tabIndex = index;
        change(tabIndex);
    }

    const ul = document.querySelector(".menu-tabs");
    ul.addEventListener("click", (event) => {
        const li = event.target.closest('li');
        let index = arrayTabs.findIndex(elem => elem === li);
        if (li) {
            console.log(index);
            getTab(index);
        }
    });

});
