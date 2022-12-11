"use strict";

const isPrime = (number) =>{
    if (number === 1 && number === 0){
        return false;
    }
    let res = 1;
    let count1 = 1;
    for(let i = 2;  res !== 0; i++){
        res = number % i;
        count1 = i;
    }
    if (count1  === number) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}
isPrime(151);