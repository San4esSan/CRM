"use strict";

const cart = {
    items: [],
    count: 0,

    add(name, price, count = 1) {

        this.items = [
            {
                name: 'телевизор',
                price: 15000,
                count: 2,
            },
            {
                name: 'iphone',
                price: 50000,
                count: 1,
            },
            {
                name: 'ноутбук',
                price: 30000,
                count: 1,
            },
        ]

    },


    get totalPrice() {
        return this.calculateItemPrice;
    },

    increaseCount(number) {
        return this.count + number;
    },

    calculateItemPrice() {
        this.summ = 0;
        this.items.forEach(item => {
            this.summ = this.summ + (item.price * item.count);
            this.count += item.count;
        })

        return this.summ
    },

    clear() {
        this.items.length = 0;
        // this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        cart.add();
        console.log(JSON.stringify(cart.items));
        console.log(cart.totalPrice(0));
    },
}

cart.print();
