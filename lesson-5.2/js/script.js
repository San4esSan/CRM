"use strict";

const cmsBtn = document.querySelector('.cms__btn');
const formOverlay = document.querySelector('.form-overlay');
const tbody = document.querySelector('tbody');
const formDiscount = document.querySelector('.form__discount');
const formUnitsCheck = document.querySelector('.form__units-check');
const formQuantity = document.querySelector('.form__quantity');
const formPrice = document.querySelector('.form__price');
const formPriceText = document.querySelector('.form__price-text');
const formPriceSum = formPriceText.querySelector('span');
const form = document.querySelector('form');
const totalPrice = document.querySelector('.total-price');

const obj = {
    'id': 0,
    'Наименование': '',
    'Категория': '',
    'ед/изм': '',
    'Количество':0,
    'Цена': 0,
    'Итог': 0,
    'img': '',
    'edit': '',
    'del': '',
};

const data = [
    {
        'id': 253842678,
        'title': 'Смартфон Xiaomi 11T 8/128GB',
        'category': 'mobile-phone',
        'units': 'шт',
        'count': 3,
        'price': 25000,
        'priceSum': 75000,
        'img': '',
        'edit': '',
        'del': '',
    },
    {
        'id': 296378448,
        'title': 'Радиоуправляемый автомобиль Cheetan',
        'category': 'toys',
        'units': 'шт',
        'count': 1,
        'price': 4000,
        'priceSum': 4000,
        'img': '',
        'edit': '',
        'del': '',
    },
    {
        'id': 215796548,
        'title': 'ТВ приставка MECOOL KI',
        'category': 'tv-box',
        'units': 'шт',
        'count': 4,
        'price': 12400,
        'priceSum': 49600,
        'img': '',
        'edit': '',
        'del': '',
    },
    {
        'id': 246258248,
        'title': 'Витая пара PROConnect 01-0043-3-25',
        'category': 'cables',
        'units': 'v',
        'count': 420,
        'price': 22,
        'priceSum': 9240,
        'img': '',
        'edit': '',
        'del': '',
    },
];

const createHead = (getObj) => {
    const tr = document.createElement('tr');
    getObj.map((elem) => {
        const td = document.createElement('td');
        td.innerHTML = elem;
        tr.appendChild(td);
    });
    return tr
};

const createRow = (obj) => {
    const trElement = document.createElement('tr');
    trElement.classList.add('tr-row');

    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
        const tdElement = document.createElement('td');
        if (key === 'units') {
            tdElement.classList.add('td-unit');
        }
        if (key === 'count') {
            tdElement.classList.add('td-amount');
        }
        if (key === 'price' || key === 'priceSum') {
            if (key === 'price') {
                tdElement.classList.add('td-price');
            }
            if (key === 'priceSum') {
                tdElement.classList.add('td-total');
            }
            tdElement.innerHTML = '$' + obj[key];
        } else {
            tdElement.innerHTML = obj[key];
        }
        if (key === 'img' || key === 'edit' || key === 'del' ) {
            tdElement.classList.add('td-btn');
            let btnImg = document.createElement('button');
            btnImg.classList.add(`btn-${key}`);
            tdElement.appendChild(btnImg);
        }
        trElement.appendChild(tdElement);
    }
    return trElement;
};

const renderGoods = (data) => {
    const thead = document.querySelector('thead');
    const getObj = Array.from(Object.keys(obj));
    thead.appendChild(createHead(getObj));

    const tbody = document.querySelector('tbody');
    const rows = data.map((obj) => createRow(obj));
    rows.forEach(row => tbody.appendChild(row));
};

renderGoods(data);

const modalControl = (cmsBtn, formOverlay) => {
    const openModal = () => {
        formOverlay.classList.add('is-visible');
    };

    const closeModal = () => {
        formOverlay.classList.remove('is-visible');
    }

    cmsBtn.addEventListener('click', () => {
        openModal();
    });

    formOverlay.addEventListener('click', (e) => {
        const target = e.target;
        if (target === formOverlay || target.closest('.close')){
            closeModal();
        }
    });

    return {
        closeModal,
    };
};

const delControl = (btnDel) => {
    btnDel.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.btn-del')) {
            target.closest('.tr-row').remove();

            Array.from(document.querySelectorAll('.tr-row')).map((elem, idx) => {
                console.log(elem.innerText, idx+1)
            })
            console.log('===========')
        }
        addTotalPrice(tbody);
    });
};

formUnitsCheck.addEventListener('click', () => {
    if (formUnitsCheck.checked) {
        formDiscount.disabled = false
    } else {
        formDiscount.disabled = true
        formDiscount.value = ''
    }
});

formPrice.addEventListener('blur', () => {
    formPriceSum.textContent = `$${formQuantity.value * formPrice.value}`
});

const addTotalPrice = (obj) => {
    let sumVal = 0;

    for (let i = 0; i < obj.rows.length; i++) {
        sumVal += +(obj.rows[i].cells[6].innerHTML).slice(1);
    }
    totalPrice.textContent = `$${sumVal}`;
}

const addProductData = product => {
    data.push(product);
    addTotalPrice(tbody);
    console.log(data);
};

const addProductPage = (product, tbody) => {
    tbody.append(createRow(product));
};

const newId = () => +String(performance.now()).replace('.', '').slice(1, -7);
console.log(newId())
const formControl = (form, tbody, closeModal) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {id = newId(), title, category, units, count, price, img='', edit='', del=''} = Object.fromEntries(formData);
        const priceSum = formPriceSum.textContent.slice(1);
        addProductData({id, title, category, units, count, price, priceSum, img, edit, del});
        addProductPage({id, title, category, units, count, price, priceSum, img, edit, del}, tbody);
        addTotalPrice(tbody);
        form.reset();
        closeModal();
    })
}

const {closeModal} = modalControl(cmsBtn, formOverlay);
formControl(form, tbody, closeModal);
delControl(tbody);
addTotalPrice(tbody);

