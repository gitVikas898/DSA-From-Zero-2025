class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class SinglelyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }


    insertAtEnd(head,x){

        let newNode = new Node(x);

        if(!head) return newNode;

        let current = head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;

        return this

    }
}