'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_faqs', [
      {
        id_lang: 1,
        question: `Apakah anda seorang pelaut ?`,
        answere: `Bukan, Saya seorang kapiten`
      },
      {
        id_lang: 1,
        question: `Apakah ini paragraf ini hanya contoh ?`,
        answere: `Ya Paragraf ini hanya contoh`
      },
      {
        id_lang: 1,
        question: `Apakah anda tahu youtube ?`,
        answere: `Ya saya tahu youtube`
      },
      {
        id_lang: 1,
        question: `Apakah anda memiliki kucing ?`,
        answere: `Tidak, saya tidak memiliki kucing`
      },
      {
        id_lang: 1,
        question: `Apakah anda tahu lorem ipsum ?`,
        answere: `Ya saya tahu itu adalah dummy text`
      },


      {
        id_lang: 2,
        question: `Are you a sailor ?`,
        answere: `No, I'm a captain`
      },
      {
        id_lang: 2,
        question: `Is this paragraph only an example ?`,
        answere: `Yes This paragraph is only an example`
      },
      {
        id_lang: 2,
        question: `Do you know youtube ?`,
        answere: `Yes I know YouTube`
      },
      {
        id_lang: 2,
        question: `Do you have a cat ?`,
        answere: `No, I do not have a cat`
      },
      {
        id_lang: 2,
        question: `Do you know lorem ipsum ?`,
        answere: `Yes, I know it is dummy text`
      },


      {
        id_lang: 3,
        question: `Bist du ein Seemann ?`,
        answere: `Nein, ich bin ein Kapitän`
      },
      {
        id_lang: 3,
        question: `Ist dieser Absatz nur ein Beispiel ?`,
        answere: `Ja Dieser Absatz ist nur ein Beispiel`
      },
      {
        id_lang: 3,
        question: `Kennst du youtube? ?`,
        answere: `Ja, ich kenne YouTube`
      },
      {
        id_lang: 3,
        question: `Hast du eine Katze ?`,
        answere: `Nein, ich habe keine Katze`
      },
      {
        id_lang: 3,
        question: `Kennen Sie Lorem Ipsum ?`,
        answere: `Ja, ich weiß, dass es Dummy-Text ist`
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_faqs', null, {});
  }
};
