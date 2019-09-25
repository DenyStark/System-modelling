const getM = () => {
  let sum = 0;
  for (let i = 0; i < 6; i++) sum += Math.random();
  return sum - 6;
};

const getRandomA = l => (-1 / l) * Math.log(Math.random());
const getRandomB = (b, a) => b * getM() + a;

module.exports = {
  getRandomA,
  getRandomB,
};
