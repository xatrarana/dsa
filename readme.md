###  LinkedList

## Node
```
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

}
```

## LinkedList

```
class LinkedList{
    
    constructor(){
        this.head = null
    }
    
    append(data){
        const newNode = new Node(data);
        
        if(!this.head){
            this.head = newNode;
        }else {
            let current = this.head;
            
            while(current.next){
                current = current.next
            }
            
            current.next = newNode
        }
    }
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    insertAtMiddle(data, position){
        const newNode = new Node(data);
        
        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
            return
        }
        
        let current = this.head;
        let index = 0;
        while(current && index < position - 1){
            current = current.next;
            index++;
        }
        
        if(!current){
            console.error("Invalid position")
            return
        }
        
        newNode.next = current.next;
        current.next = newNode;
    }
    
    search(data){
        let current = this.head;
        while(current){
            if(current.data === data){
                return current;
            }
            current = current.next
        }
        
        return false;
    }
    
    deletAtBegining(){
        if(this.head){
            this.head = this.head.next;
        }else {
            console.error("List is empty")
        }
    }
    
    deleteFromMiddle(position){
        if(position === 0){
            deletAtBegining()
            
            return
        }
        
        let current = this.head;
        let index = 0;
        while(current && index < position - 1){
            current = current.next;
            index++;
        }
        if(!current || !current.next){
            console.log("Invalid position")
            return
        }
        current.next = current.next.next
    }
    
    deleteFormEnd(){
        if(!this.head){
            console.error("List is empty");
            return
        }
        if(!this.head.next){
            this.head = null;
            return
        }
        
        let current  = this.head;
        let prev = null;
        
        while(current.next){
            prev = current;
            current = current.next
        }
        
        prev.next = null
    }
    
    print(){
        console.log(JSON.stringify(this.head,null,2))
    }
}
```

```
const ll = new LinkedList()
ll.append("one")
ll.append("two")
ll.insertAtBeginning("three")
ll.insertAtMiddle("middle",1)
ll.print()
result = ll.search("two")
console.log(result)

ll.deletAtBegining()

ll.print()

```

### Stack

```
class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.top = -1;
        this.capacity = size;
        this.#isFull
        this.#isEmpty
    }

    #isFull(){
        return this.top === this.capacity - 1;
    }
    #isEmpty(){
        return this.top === -1;
    }
    push(element){
        if(this.#isFull()){
            console.log("Stack overflow");
            return
        }

        console.log("Inserting element to the stack");
        this.arr[++this.top] = element;
    }

    pop(){
        if(this.#isEmpty()){
            console.log("Stack is empty");
            return
        }

        return this.arr[this.top--];
    }

    print(){
        for(let i = 0; i <= this.top; i++){
            console.log(this.arr[i]);
        }
    }
}
```

```
let stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop()
stack.print();
```


### Qeue

```
class Qeue {
    constructor(size){
        this.arr = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.capacity = size;
        this.#isFull
        this.#isEmpty
    }

    #isFull(){
        return this.front === 0 && this.rear === this.capacity - 1;
    }

    #isEmpty(){
        return this.front === -1;
    }

    enqueue(element){
        if(this.#isFull()){
            console.log("Qeue overflow");
            return
        }
        if(this.front === -1){
            this.front = 0;
        }
        this.rear++;
        this.arr[this.rear] = element;
        console.log(`Inserting ${element} to the qeue ${this.rear}`);
    }

    deqeue(){
        if(this.#isEmpty()){
            console.log("Qeue is empty");
            return
        }
        let element = this.arr[this.front]
        if(this.front >= this.rear){
            this.front = -1;
            this.rear = -1;
        }else {
            this.front ++
        }
        console.log(`Removing ${element} from the qeue`);
        return element;
    }


    print(){
        if(this.#isEmpty()){
            console.log("Qeue is empty");
            return
        }
        for(let i = this.front; i <= this.rear; i++){
            console.log(this.arr[i]);
        }
    }

    peek(){
        if(this.#isEmpty()){
            console.log("Qeue is empty");
            return
        }
        console.log(this.arr[this.front]);
    }
}
```



let qeue = new Qeue(5);
qeue.enqueue(1);
qeue.enqueue(2);
qeue.enqueue(3);
qeue.enqueue(4);
qeue.enqueue(5);
qeue.deqeue()
qeue.print();
qeue.peek();




### Recursive Binary Search
```
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
```
### Iterative Method

```
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
```



### Merge Sort Recursive

```
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
```