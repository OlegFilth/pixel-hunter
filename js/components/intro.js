import ELEMENTS from '../elements';
import getNode from '../utils/getNode';
import showScreen from '../utils/showScreen';
import greeting from './greeting';

const introScreen = `
<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
  `;

const getIntroScreen = getNode(introScreen);

document.addEventListener(`elementAdded`, () => {
  ELEMENTS.introasterisk.addEventListener(`click`, () => {
    showScreen(ELEMENTS.main, greeting);
  });
});

export default getIntroScreen;
