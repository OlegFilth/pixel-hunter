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

const arrowsKeyUpHandler = (e) => {
  if (e.keyCode === KEYCODES.ARROW_NEXT && currentScreenNum < templates.length - 1) {
    getScreen(++currentScreenNum);
  }
  if (e.keyCode === KEYCODES.ARROW_PREV && currentScreenNum > 0) {
    getScreen(--currentScreenNum);
  }
  removeEventListener(`keyup`, arrowsKeyUpHandler);
};

document.addEventListener(`keyup`, arrowsKeyUpHandler);

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
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;
document.body.insertAdjacentHTML(`beforeend`, buttonsMarkup);
