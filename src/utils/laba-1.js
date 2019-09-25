const getM = () => {
  let sum = 0;
  for (let i = 0; i < 6; i++) sum += Math.random();
  return sum - 6;
};

const getRandomA = (count, l) =>
  new Array(count).fill(0).map(() => (-1 / l) * Math.log(Math.random()));

const getRandomB = (count, a, b) =>
  new Array(count).fill(0).map(() => b * getM() + a);

const getRandomC = (count, a, c) => {
  let z = 1;
  const array = [];
  for (let i = 0; i < count; i++) {
    z = (a * z) % c;
    array.push(z / c);
  }
  return array;
};

module.exports = {
  getRandomA,
  getRandomB,
  getRandomC,
};
