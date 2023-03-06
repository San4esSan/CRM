const createHead = (getObj) => {
  const tr = document.createElement('tr');
  getObj.map((elem) => {
    const td = document.createElement('td');
    td.innerHTML = elem;
    tr.appendChild(td);
  });
  return tr;
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
    if (key === 'img' || key === 'edit' || key === 'del') {
      tdElement.classList.add('td-btn');
      const btnImg = document.createElement('button');
      btnImg.classList.add(`btn-${key}`);
      tdElement.appendChild(btnImg);
    }
    trElement.appendChild(tdElement);
  }
  return trElement;
};

export default {createHead, createRow};
