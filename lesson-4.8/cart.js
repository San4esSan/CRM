"use strict";

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice(totalPrice) {
        return totalPrice;
    },

    add(name, price, count = 1) {
        this.items.push({
                name: 'телевизор',
                price: 15000,
                count: 1,
            },
            {
                name: 'iphone',
                price: 50000,
                count: 3,
            },
            {
                name: 'ноутбук',
                price: 30000,
                count: 2,
            },)

        this.calculateItemPrice();
        this.getTotalPrice();
    },

    increaseCount(number) {
        return this.count + number;
    },

    calculateItemPrice() {
        this.items.forEach(item => {
           this.totalPrice = this.totalPrice + (item.price * item.count);
           this.count += item.count;
        })
    },

    clear() {
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        cart.add();
        console.log(JSON.stringify(cart.items));
        console.log(cart.totalPrice);
    },

}

cart.print();
// cart.clear();

