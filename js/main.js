'use strict';

const buttonsMarkup = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn arrows__btn--prev"><-</button>
<button class="arrows__btn arrows__btn--next">-></button>
</div>`;

document.body.insertAdjacentHTML(`beforeend`, buttonsMarkup);
const btnNext = document.querySelector(`.arrows__btn--next`);
const btnPrev = document.querySelector(`.arrows__btn--prev`);
const templates = Array.from(document.querySelectorAll(`template`));
const mainNode = document.querySelector(`#main`);

const KEYCODES = {
  ARROW_PREV: 37,
  ARROW_NEXT: 39
};

let currentScreenNum = 0;

const wrap = (it) => {
  const shadow = document.createElement(`div`);
  const content = it.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const getScreen = (num) => {
  mainNode.innerHTML = ``;
  const node = wrap(templates[num]);
  mainNode.appendChild(node);
  currentScreenNum = num;
};

const nextScreen = () => {
  if (currentScreenNum < templates.length - 1) {
    getScreen(++currentScreenNum);
  }
};

const prevScreen = () => {
  if (currentScreenNum > 0) {
    getScreen(--currentScreenNum);
  }
};

const arrowsKeyupHandler = (e) => {
  if (e.keyCode === KEYCODES.ARROW_NEXT) {
    nextScreen();
  }
  if (e.keyCode === KEYCODES.ARROW_PREV) {
    prevScreen();
  }
};

btnNext.addEventListener(`click`, nextScreen);
btnPrev.addEventListener(`click`, prevScreen);
document.addEventListener(`keyup`, arrowsKeyupHandler);
getScreen(0);
