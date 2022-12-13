"use strict";

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {
    let res = arr.map((arr) => pref + ' ' + arr)
    console.log(res)
}

addPrefix(names, 'Mr')
