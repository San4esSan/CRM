'use strict';

const addArray = (arr = []) => {
  const randomNumber = Math.floor(10 * Math.random()) + 1;

  const result = arr.reduce((sum, elem) => sum + elem, 0);

  if (result > 50) {
    return arr;
  } else {
    arr.push(randomNumber);
    return addArray(arr);
  }
};

console.log(addArray());
