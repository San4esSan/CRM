"use strict";

const modal = document.querySelector('.modal');
const cmsBtn = document.querySelector('.cms__btn');
const formOverlay = document.querySelector('.form-overlay');
const close = document.querySelector('.close');
cmsBtn.addEventListener('click', () => {
    formOverlay.classList.add('is-visible');
});

modal.addEventListener('click', event => {
    event.stopPropagation();
})

formOverlay.addEventListener('click', () => {
    formOverlay.classList.remove('is-visible');
});

close.addEventListener('click', () => {
    formOverlay.classList.remove('is-visible');
});