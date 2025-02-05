class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglelyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        let vertex = new Node(data)
        if(this.head === null){
            this.head = vertex;
            this.tail = vertex;
        }else{
            this.tail.next = vertex;
            this.tail = vertex;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }

        let current = this.head;
        let newTail = current;
  
        //basically newTail will be second last node and current will be last element
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;


    }

    construct(arr){
        if(arr.length === 0) return null;

        let head = new Node(arr[0]);
        let current = head;

        for(let i=0;i<arr.length;i++){
            current.next = new Node(arr[i]);
            current = current.next;
        }
        return head;
    }
}

let myList = new SinglelyLinkedList();

console.log(myList.construct([1,2,3,4,5]));





