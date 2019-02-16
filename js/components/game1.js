import game2 from './game2';
import greeting from './greeting';
import getNode from '../utils/getNode';
import state from '../state.js';
import handlers from '../handlers';

const game1Screen = `
<header class="header">
<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
</button>
<div class="game__timer">NN</div>
<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
</div>
</header>
<section class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="${state.game1.questions[0].img.url}" alt="Option 0" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question0" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question0" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="${state.game1.questions[1].img.url}" alt="Option 1" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input class="visually-hidden" name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input class="visually-hidden" name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<ul class="stats">
  <li class="stats__result stats__result--wrong"></li>
  <li class="stats__result stats__result--slow"></li>
  <li class="stats__result stats__result--fast"></li>
  <li class="stats__result stats__result--correct"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
  <li class="stats__result stats__result--unknown"></li>
</ul>
</section>
`;

const getGame1Screen = getNode(game1Screen);

const backButtonNode = getGame1Screen.querySelector(`.back`);
const gameContentNode = getGame1Screen.querySelector(`.game__content`);

gameContentNode.addEventListener(`change`, (e) => {
  return handlers.getAnswerHandler(e, `game1`, `multipleChoise`, game2);
});

backButtonNode.addEventListener(`click`, () => {
  return handlers.backToStartScreenHandler(greeting);
});

// gameContentNode.addEventListener(`change`, (e) => {
//   const payload = {
//     game: `game1`,
//     question: getNumQuestion(e.target.name),
//     answer: e.target.value,
//   };
//   getUserAnswer(payload);
//   const isAllAnswered = hasGameGotAllAnswers(payload);
//   if (!isAllAnswered) {
//     return;
//   } else {
//     showScreen(ELEMENTS.main, game2);
//   }
// });

export default getGame1Screen;
