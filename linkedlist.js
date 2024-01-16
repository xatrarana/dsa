class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

}

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
