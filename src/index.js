
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return []
  }
  let arrayPlain = [];
  for (let i = 0; i <= matrix.length - 1; i += 1) {
    if ((i === 0) || ((i % 2) === 0)){
      for (let j = 0; j <= matrix[i].length - 1; j += 1) {
        arrayPlain.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
        arrayPlain.push(matrix[i][j])
      }
    }
  }
  return arrayPlain;
}
