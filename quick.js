/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, strt = 0, end = arr.length - 1){
    const swap = (arr, idx1, idx2) => { 
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    };

    let pivot = arr[strt];
    let swapIdx = strt;

    for (let i = strt + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }


    swap(arr, strt, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

/*
quickSort accepts an array, left index, and right index
*/


module.exports = quickSort;