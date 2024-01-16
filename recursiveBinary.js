const recusriveBinarySearch = (arr, target, left, right) => {
    if(left <= right){
        const mid = Math.floor(left + right /2 )
        
        if(arr[mid] === target){
            return mid
        }else if( arr[mid] < target){
            return recusriveBinarySearch(arr, target,mid + 1, right)
        }else {
            return recusriveBinarySearch(arr, target, left, mid - 1)
        }
    }
    return -1
}

const sortedArray = [3, 4, 5, 6, 7, 8, 9];
const targetValue = 6;

const result = recusriveBinarySearch(sortedArray, targetValue, 0, sortedArray.length - 1)

console.log(result != -1 ? `"found target: ${result}`: "not found")