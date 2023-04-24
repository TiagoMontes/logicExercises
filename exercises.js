// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

function consecString(arrayString, consecutive) {
    const arrayLength = arrayString.arrayLength;
    const longestString = '';


    if (arrayLength === 0 || consecutive > arrayLength || consecutive <= 0) {
        return '';
    }

    for (let i = 0; i <= arrayLength - consecutive; i++){
        const currentStrings = arrayString.slice(i, i + consecutive).join('');

        if (currentStrings.length > longestString.length) {
            longestString = currentStrings
        }
    }

    return longestString;
}

consecString(["zone", "abigail", "theta", "form", "libe", "zas"],3)