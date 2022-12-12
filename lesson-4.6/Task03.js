"use strict";

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {
    let res = arr.map((names) => pref + ' ' + names)
    console.log(res)
}

addPrefix(names, 'Mr')
