class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    push(value){

        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop(){
        if(!this.head)return undefined;

        let popedTail = this.head;
        let newTail = popedTail;

        while(popedTail.next){
            newTail = popedTail;
            popedTail = popedTail.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head === null;
            this.tail === null;
        }
        return popedTail.value;
    }

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return oldHead.value;
    }

    unShift(value){
        let vertex = new Node(value);

        if(!this.head){
            this.head = vertex;
            this.tail = vertex;
        }else{
            vertex.next = this.head;
            this.head = vertex;
        }
        this.length++
        return this;
    }

    get(index){
        if(index< 0 || index>this.length) return undefined;

        let count = 0;
        let current = this.head;

        while(count !== index){
            current = current.next;
            count++;
        }
        return current;
    }

    set(value,index){
        let foundNode = this.get(index);
        if(!foundNode) return false;
        else{
            foundNode.value = value
        }
        return true;
    }
    
    insert(index,value){
        if(index <0 || index > this.length ) return false;


        if(index === 0){
            this.unShift(value);
            return true
        }

        if(index === this.length){
            this.push(value);
            return true;
        }

        let newNode = new Node(value);

        let prevNode = this.get(index-1);

        let temp = prevNode.next;

        prevNode.next = newNode;

        newNode.next = temp;

        this.length++;
        return true
    }
    remove(index){
        if(index <0 || index > this.length ) return false;

        if(index === 0){
            this.shift();
            return true;
        }
        if(index === this.length){
            this.pop();
            return true;
        }

        let prevNode = this.get(index-1);

        let temp = prevNode.next;

        prevNode.next = temp.next;

        this.length--;
        return temp.value;
    }
}


let mylist = new SLL();
mylist.push("10")
mylist.push("20")
mylist.push("30")
mylist.push("40")
mylist.push("50")

mylist.printList();

console.log(mylist.pop());

mylist.printList();

console.log(mylist.shift());
mylist.printList();

mylist.unShift("8")
mylist.printList()

console.log(mylist.get(2));
console.log(mylist.set("17",3))
mylist.printList()

mylist.insert(3,"24");
mylist.printList();
console.log(mylist.remove(3))
mylist.printList();