/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let dig = 0;
  //console.log (matrix);
  for (let i = 0; i < matrix.length; i++){
    if (typeof(matrix[i]) == 'object') {
      //console.log(matrix[i]);
      let  a = matrix[i];
      for(let j = 0; j <a.length; j++){
        if(a[j] > 0){
          dig = dig + a[j];
        }
      }
    }
  }
  return (dig);
}

module.exports = getMatrixElementsSum;
