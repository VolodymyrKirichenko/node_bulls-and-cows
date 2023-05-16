'use strict';

const generation = () => {
  let numbers = '';

  while (numbers.length < 4) {
    const num = Math.round(Math.random() * 10);

    if (!numbers.includes(String(num))) {
      numbers += num;
    }
  }

  return numbers;
};

module.exports = { generation };
