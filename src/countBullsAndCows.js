'use strict';

const countBullsAndCows = (num, n) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === n[i]) {
      bulls++;
    }

    if (num[i] !== n[i] && num.includes(n[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { countBullsAndCows };
