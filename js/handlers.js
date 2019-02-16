import ELEMENTS from './elements';
import getNumQuestion from './utils/getNumQuestion';
import showScreen from './utils/showScreen';
import state, {getUserAnswer, hasGameGotAllAnswers} from './state';

const handlers = {
  getAnswerHandler: (e, game, gameType, nextScreen) => {
    let payload;
    if (gameType === `multipleChoise`) {
      payload = {
        game,
        question: getNumQuestion(e.target.name),
        answer: e.target.value,
      };
    } else if (gameType === `singleChoisePhoto`) {
      payload = {
        game,
        question: 1,
        answer: `photo`,
      };
    } else if (gameType === `singleChoisePicture`) {
      payload = {
        game,
        question: 1,
        answer: `picture`,
      };
    }
    getUserAnswer(state, payload);
    const isAllAnswered = hasGameGotAllAnswers(state, payload);
    if (!isAllAnswered) {
      return;
    } else {
      showScreen(ELEMENTS.main, nextScreen);
    }
  },
  backToStartScreenHandler: (startScreen) => {
    showScreen(ELEMENTS.main, startScreen);
  }
};
export default handlers;
