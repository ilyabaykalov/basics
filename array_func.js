function arrayFromN(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i)
    }
    return array;
}

function sumFromArray(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

function maxNumFromArray(array) {
    return Math.max(...array);
}

function minNumFromArray(array) {
    return Math.min(...array);
}

function evenNumFromArray(array) {
    return array.filter(num=>num%2===0)
}

alert(arrayFromN(5));
alert(sumFromArray([1,2,4,5,8,7,3,12]));
alert(maxNumFromArray([1,2,4,5,8,7,3,12]));
alert(minNumFromArray([1,2,4,5,8,7,3,12]));
alert(evenNumFromArray([1,2,4,5,8,7,3,12]));
