function sumExceptIndex(array, index) {
    let sum = 0;

    array.forEach((currentValue, currentIndex, array) => {
        if (index != currentIndex) {
            sum += currentValue;
        }
    });

    return sum;
}

function minMaxSums(array) {
    let sums = [];

    array.forEach((currentValue, currentIndex, array) => {
        let sum = sumExceptIndex(array, currentIndex);

        return sums.push(sum);
    });

    let sortedSums = sums.slice().sort((a,b) => a - b );

    let max = sortedSums[sums.length - 1];
    let min = sortedSums[0];

    return [min, max];
}

let input = [1,2,3,4,5];
let minMax = minMaxSums(input);

process.stdout.write(`Min: ${minMax[0]} Max: ${minMax[1]}\n`);
