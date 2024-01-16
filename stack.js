/**
* basic stack implementation
push -> add an element to the top of the stack
pop -> remove an element from the top of the stack
isEmpty -> check if the stack is empty
isFull -> check if the stack is full
peek -> get the value of the top element without removing it
* 
**/

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


let stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop()
stack.print();