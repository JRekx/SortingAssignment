function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currVal = array[i];

        for (var j = i - i; j > -1 && array[j] > currVal; j--) {
            array[j + 1] = array[j];
        }


        array[j + 1] = currVal;
    }

    return array;


}

module.exports = insertionSort;