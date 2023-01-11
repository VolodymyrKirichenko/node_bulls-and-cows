'use strict';

const { generation } = require('./generation');
const { countBullsAndCows } = require('./countBullsAndCows');

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generationNumbers = generation();

const CustomGame = () => {
  terminal.question('Write 4 different digits: ', (answer) => {
    const trimmedAnswer = answer.split(' ').join('');

    const isFourElements = [...new Set(trimmedAnswer)].length === 4;

    if (!isFourElements || isNaN(trimmedAnswer)) {
      console.log('Please enter only 4 numbers and numbers only');
      CustomGame();
    } else {
      const {
        bulls, cows,
      } = countBullsAndCows(generationNumbers, trimmedAnswer);

      if (bulls < 4) {
        console.log(`BULLS - ${bulls}, COWS - ${cows}. Try again`);
        CustomGame();
      } else {
        console.log('---You won---');
        terminal.close();
      }
    }
  });
};

CustomGame();
