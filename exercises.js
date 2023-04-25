// 1) You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function longestConsec(arrayString, consecutive) {
    let longest = '';

    // enquanto consecutive for maior que zero (eliminando possibilidades negativas), e i for menor ou igual ao tamanho da array - N cosnsecutivos (assim, no caso de você ter N consecutivo que não dê pra iterar sobre toda a array, ele irá encerrar o looping no ultimo consecutivo possível), ele irá iterar.
    // Para saber se vamos iterar sobre todos os valores da array, você pode ver se o tamanho da array %(operador resto) consecutivo é igual a 1, se sim, todos os valores da array vão ser iterados, senão, alguns valores não serão iterados.
    for (let i = 0; consecutive > 0 && i <= arrayString.length - consecutive; i++) {
        let currentArray = arrayString.slice(i, i + consecutive).join('');
        if (joinStrings.length > longest.length) {
            longest = currentArray
        }
    }
    return longest;
}

consecString(["zone", "abigail", "theta", "form", "alibeel", "zassg", 'hfbsdejhf', 'hfdsbf'], 3)