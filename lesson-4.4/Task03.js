"use strict";

const calculate = (sum, amount, promo) => {
    let resultSum = sum;

    if (amount > 10) {
        resultSum = resultSum - (resultSum * 0.03)
    }

    if (resultSum > 30000) {
        resultSum = resultSum - ((resultSum - 30000) * 0.15)
    }

    if (promo === "METHED") {
        resultSum = resultSum - (resultSum * 0.1)
    }

    if (promo === "G3H2Z1" && resultSum > 2000) {
        resultSum -= 500
    }

    return resultSum
}

console.log(calculate(40000, 11, "G3H2Z1"))