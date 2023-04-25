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
  
  let lengthArrays = firstArray.length
  let diffPow = [];
    
  for(let i = 0; i < lengthArrays; i++){
    diffPow.push(Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2)); 
  }
    
    return diffPow.reduce((a,b) => a + b) / lengthArrays;
}

console.log(solution([1, 2, 3], [4, 5, 6])); 