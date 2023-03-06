import getElements from './modules/getElements.js';
const {cmsBtn, formOverlay, tbody, formDiscount,
  formUnitsCheck, form} = getElements;

import control from './modules/control.js';
const {modalControl, delControl, formControl} = control;

import render from './modules/render.js';
const {addTotalPrice} = render;

{
  const init = () => {
    formUnitsCheck.addEventListener('click', () => {
      if (formUnitsCheck.checked) {
        formDiscount.disabled = false;
        formDiscount.classList.toggle('form__discount-disabled');
      } else {
        formDiscount.disabled = true;
        formDiscount.value = '';
        formDiscount.classList.toggle('form__discount-disabled');
      }
    });

    const {closeModal} = modalControl(cmsBtn, formOverlay);
    formControl(form, tbody, closeModal);
    delControl(tbody);
    addTotalPrice(tbody);
  };
  init();
}

