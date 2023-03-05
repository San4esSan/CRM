import getElements from './getElements.js';
const {tbody, formQuantity, formPrice, formPriceSum} = getElements;

import render from './render.js';
const {addTotalPrice, addProductData, addProductPage} = render;

const modalControl = (cmsBtn, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  cmsBtn.addEventListener('click', () => {
    openModal();
  });

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.closest('.close')) {
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
    }
    addTotalPrice(tbody);
  });
};

const newId = () => +String(performance.now()).replace('.', '').slice(1, -7);

formPrice.addEventListener('blur', () => {
  formPriceSum.textContent = `$${formQuantity.value * formPrice.value}`;
});

const formControl = (form, tbody, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
      id = newId(),
      title,
      category,
      units,
      count,
      price,
      img = '',
      edit = '',
      del = '',
    } = Object.fromEntries(formData);
    const priceSum = formPriceSum.textContent.slice(1);
    addProductData({id, title, category, units, count, price,
      priceSum, img, edit, del});
    addProductPage({id, title, category, units, count, price,
      priceSum, img, edit, del}, tbody);
    addTotalPrice(tbody);
    form.reset();
    closeModal();
  });
};

export default {modalControl, delControl, newId, formControl};

