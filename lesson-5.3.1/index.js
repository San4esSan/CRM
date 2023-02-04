'use strict';

let listElem = document.querySelector('.list');

let data = [];

const addList = (data) => {
    listElem.innerHTML = '';
    data.forEach((item) => {
        return listElem.innerHTML += `<li>${item}</li>`
    })
}

while (true) {
    let str = prompt('введи текст');

    if (str === 'exit' || str === null) {
        break
    } else {
        str = str.trim()
        if (str === 'clear') {
            while (listElem.firstChild) {
                listElem.firstChild.remove();
            }
            data = []
        } else if (str === 'del') {
            data.pop()
        } else if (str !== '') {
            data = [...data, str];
        }
    }
    addList(data);
    console.log(data);
}

