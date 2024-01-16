function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target) {
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else {
            right = mid + 1;
        }
    }
    return -1 // target not found
}

const sortedArray = [3, 4, 5, 6, 7, 8, 9];
const targetValue = 6;

const result = binarySearch(sortedArray, targetValue)

console.log(result != -1 ? "found target ": "not found")