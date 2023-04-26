// 1) You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(arrayString, consecutive) {
    let longest = '';

    // enquanto consecutive for maior que zero (eliminando possibilidades negativas), e i for menor ou igual ao tamanho da array - N cosnsecutivos (assim, no caso de você ter N consecutivo que não dê pra iterar sobre toda a array, ele irá encerrar o looping no ultimo consecutivo possível), ele irá iterar.
    // Para saber se vamos iterar sobre todos os valores da array, você pode ver se o tamanho da array %(operador resto) consecutivo é igual a 1, se sim, todos os valores da array vão ser iterados, senão, alguns valores não serão iterados.
    for (let i = 0; consecutive > 0 && i <= arrayString.length - consecutive; i++) {
        let currentArray = arrayString.slice(i, i + consecutive).join('');
        if (currentArray.length > longest.length) {
            longest = currentArray
        }
    }
    console.log(longest)
    return longest;
}

// longestConsec(["zone", "abigail", "theta", "form", "alibeel", "zassg", 'hfbsdejhf', 'hfdsbf'], 3)




//2)Complete the function that
// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

var solution = function(firstArray, secondArray) {
  if(firstArray.length !== secondArray.length){
    return ''
  }
  
  let diffPow = [];
    
  for(let i = 0; i < firstArray.length; i++){
    diffPow.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2)); 
  }
    
    return diffPow.reduce((a,b) => a + b) / firstArray.length;
}

// console.log(solution([1, 2, 3], [4, 5, 6])); 



// 3) In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)
// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

function pickPeaks(arr){
  let posPeaks = { pos: [], peaks: [] }

  if (arr.length > 2) {
    var pos = -1;

    for (let i = 1; i < arr.length; i++){
      if (arr[i] > arr[i - 1]) {
        pos = i;
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        posPeaks.pos.push(pos);
        posPeaks.peaks.push(arr[pos]);
        pos = -1
      }
    }
  }

  return posPeaks;
}

pickPeaks([0, 1, 2, 5, 1, 0])