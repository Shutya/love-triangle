/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sum = 0;
  for (let i = 0; i < preferences.length; i++) {
    const conditionOne = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
    const conditionTwo = i + 1 !== preferences[i];
    if( conditionOne && conditionTwo ) {
      sum++;
    }
  }
  return sum / 3;
};
