'use strict';
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
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
  mainNode.appendChild(wrap(templates[num]));
  currentScreenNum = num;
};

getScreen(1);

const arrowsKeyupHandler = (e) => {
  if (e.keyCode === KEYCODES.ARROW_NEXT && currentScreenNum < templates.length - 1) {
    getScreen(++currentScreenNum);
  }
  if (e.keyCode === KEYCODES.ARROW_PREV && currentScreenNum > 0) {
    getScreen(--currentScreenNum);
  }
  removeEventListener(`keyup`, arrowsKeyupHandler);
};

const arrowsBtnClickHandler = (e) => {
  if (e.target.classList.contains(`arrows__btn--next`) && currentScreenNum < templates.length - 1) {
    getScreen(++currentScreenNum);
  }
  if (e.target.classList.contains(`arrows__btn--prev`) && currentScreenNum > 0) {
    getScreen(--currentScreenNum);
  }
  removeEventListener(`click`, arrowsBtnClickHandler);
};

document.addEventListener(`keyup`, arrowsKeyupHandler);

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

const arrowBtnsNode = document.querySelector(`.arrows__wrap`);

arrowBtnsNode.addEventListener(`click`, arrowsBtnClickHandler);
