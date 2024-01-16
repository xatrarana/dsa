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



let qeue = new Qeue(5);
qeue.enqueue(1);
qeue.enqueue(2);
qeue.enqueue(3);
qeue.enqueue(4);
qeue.enqueue(5);
qeue.deqeue()
qeue.print();
qeue.peek();
