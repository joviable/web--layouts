// a project that takes an array and returns the average of the array

function computeAverage =(scores) => {
    for (let i=0; i < scores.lengtj; i++) {
        sum = sum + scores[i];
    }

    const average = sum / scores.length;
    return average
}

const average computeAverage([1, 2, 3, 4, 5]);