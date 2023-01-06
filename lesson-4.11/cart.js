'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  promocode: 'METHED',

  set setDiscount(value) {
    if (value === 'METHED') {
      this.discount = 15;
    } else if (value === 'NEWYEAR') {
      this.discount = 21;
    }
  },

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
    ];
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
      this.summ += (item.price * item.count);
      // this.count += item.count;
    });
    console.log((this.summ * this.discount / 100));
    return this.summ - (this.summ * this.discount / 100);
  },

  clear() {
    this.items.length = 0;
    this.count = 0;
  },

  print() {
    this.add();
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice(0));
  },
};

// cart.promocode = 'NEWYEAR';

cart.setDiscount = cart.promocode;
// console.log(cart.promocode);
// console.log(cart.discount);
cart.print();
