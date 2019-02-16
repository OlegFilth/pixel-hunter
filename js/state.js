const state = {
  initialGame: {

  },
  gemeStats: {

  },
  game1: {
    questions: [
      {
        img: {
          url: `http://i.imgur.com/1KegWPz.jpg`,
          type: `photo`
        },
        rightAnswer: `photo`,
        answer: {
          type: null,
          spendTime: null,
        }
      },
      {
        img: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          type: `paint`,
        },
        rightAnswer: `paint`,
        answer: {
          type: null,
          spendTime: null,
        }
      }
    ]
  },
  game2: {
    questions: [
      {
        img: {
          url: `https://cs8.pikabu.ru/post_img/big/2017/06/14/9/1497452989125512223.jpg`,
          type: `picture`
        },
        rightAnswer: `picture`,
        answer: {
          type: null,
          spendTime: null,
        }
      },
    ],
  },
  game3: {
    questions: [
      {
        img: [
          {
            url: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwie8bm76JrgAhVHmbQKHWc2BKQQjRx6BAgBEAU&url=https%3A%2F%2Ffishki.net%2F1214793-cherno-belyj-fotorealizm-franko-kluna%2Fgallery-265539-photo.html&psig=AOvVaw2HJJW3YQzJepL6Z3prNet_&ust=1549120139231855`,
            type: `picture`
          },
          {
            url: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwie8bm76JrgAhVHmbQKHWc2BKQQjRx6BAgBEAU&url=https%3A%2F%2Ffishki.net%2F1214793-cherno-belyj-fotorealizm-franko-kluna%2Fgallery-265539-photo.html&psig=AOvVaw2HJJW3YQzJepL6Z3prNet_&ust=1549120139231855`,
            type: `photo`
          },
          {
            url: `https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwie8bm76JrgAhVHmbQKHWc2BKQQjRx6BAgBEAU&url=https%3A%2F%2Ffishki.net%2F1214793-cherno-belyj-fotorealizm-franko-kluna%2Fgallery-265539-photo.html&psig=AOvVaw2HJJW3YQzJepL6Z3prNet_&ust=1549120139231855`,
            type: `picture`
          }
        ],
        rightAnsver: `picture`,
        answer: {
          type: null,
          spendTime: null,
        }
      },
    ],
  },
  stats: null,
};

export const getUserAnswer = (stateShadow, payload) => {
  stateShadow[payload.game].questions[payload.question].answer.type = payload.answer;
};

export const hasGameGotAllAnswers = (stateShadow, payload) => {
  const answers = stateShadow[payload.game].questions.map((item) => {
    return item.answer.type;
  });
  const result = answers.find((item) => {
    return item === null;
  });

  return result === undefined || false;
};

export default state;
