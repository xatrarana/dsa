
const arr = "string".split('');
const reverseString = (arr) => {
    console.log(arr)
    let stack = [];
    let top = 0;


    for(let i = arr.length - 1; i >=  0; i--){
        stack.push(arr[i]);
    }
    console.log(stack)  
    

    return stack.join('');

}

console.log(reverseString(arr)) 
