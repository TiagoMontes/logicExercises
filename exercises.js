// 1) You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(arrayString, consecutive) {
    let longest = '';
    // enquanto consecutive for maior que zero (eliminando possibilidades negativas), e i for menor ou igual ao tamanho da array - N cosnecutivos (assim, no caso de você ter N consecutivos maior que a array, ele irá encerrar o looping no ultimo consecutivo possível, pois não haverá valores para calcular a soma dos consecutivos)
    for (let i = 0; consecutive > 0 && i <= arrayString.length - consecutive; i++) {
        let currentArray = arrayString.slice(i, i + consecutive).join('');
        if (joinStrings.length > longest.length) {
            longest = currentArray
        }
    }
    return longest;
}

consecString(["zone", "abigail", "theta", "form", "libe", "zas"],5)