"use strict";

const cmsBtn = document.querySelector('.cms__btn');
const formOverlay = document.querySelector('.form-overlay');

const tbody = document.querySelector('tbody');

tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.td-btn')) {
        target.closest('.tr-row').remove();
    }
    // const trRow = document.querySelectorAll('.tr-row');

    Array.from(document.querySelectorAll('.tr-row')).map((elem, idx) => {
        console.log(elem, idx + 1)
    })
    console.log('===========')

});

cmsBtn.addEventListener('click', () => {
    formOverlay.classList.add('is-visible');
});

formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.closest('.close')){
        formOverlay.classList.remove('is-visible');
    }
});