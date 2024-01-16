const arr = [7,6,1,5,4,3]
const log = console.log

function mergeSort(arr){
    if (arr.length <= 1) return arr; // alredy sorted
    const half = Math.floor(arr.length / 2)
  
    const left = arr.slice(0,half)
   
    const right = arr.slice(half)
   
    
    
    
    const sortedLeft = mergeSort(left)
        
    
    const sortedRight = mergeSort(right)
       
    
    return merge(sortedLeft,sortedRight)
    
}

function merge(left,right){
    let result = [];
    let lIndex = 0;
    let rIndex = 0;
    
    while(lIndex < left.length && rIndex < right.length){
        if(left[lIndex] < right[rIndex]){
            result.push(left[lIndex]);
            lIndex++;
        }else {
            result.push(right[rIndex]);
            rIndex++
        }
    }
    
    return result.concat(left.slice(lIndex)).concat(right.slice(rIndex))
}





console.log(mergeSort(arr))