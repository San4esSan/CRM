"use strict";

const getConvert = (many) => {
    const eu = 1.2
    const usd = 73
    return many * eu * usd
};

console.log(getConvert(10));