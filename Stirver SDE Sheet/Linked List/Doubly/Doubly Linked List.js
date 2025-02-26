function Node(value){
    this.value = value;
    this.next = null;
    this.prev = null;
}

function appendNode(head,value){
    const newNode = new Node(value);
    if(!head){
        return newNode
    }

    let current = head;

    while(current.next!==null){
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    return head;
}
function printList(head){
    if(!head){
        return null; 
    }

    let result = [];
    let current = head;

    while(current!==null){
        result.push(current.value);
        current= current.next;
    }

    console.log(result.join("⇄"));

}

// reverse a Doubly linked List 

function reverseNaive(head){
    let stack = [];

    let curr = head;
    while(curr!==null){
        stack.push(curr.value);
        curr = curr.next;
    }

    curr = head;
    while(curr!==null){
        curr.value = stack.pop();
        curr = curr.next;
    }

    return head;
}

function reverseEff(head){
    if(!head || head.next == null){
        return head;
    }

    let curr = head;
    let last = null;

    while(curr!==null){
        last = curr.prev;
        curr.prev = curr.next;
        curr.next = last;

        curr = curr.prev;
    }
    return last.prev
}
function deleteAllK(head,key){
    if(!head){
        return null
    }

    let temp = head;
    while(temp!==null){
        if(temp.value === key){
            if(temp === head){
                head = head.next;
            }

            let nextNode = temp.next;
            let prevNode = temp.prev;

            if(nextNode) nextNode.prev = prevNode;
            if(prevNode) prevNode.next = nextNode;

            temp = nextNode;
        }else{
            temp = temp.next;
        }
    }
    return head;
}
function judge(){
    const head = [2,2,10,8,4,2,3,2];
    let DLL = new Node(head[0]);
    for(let i=1;i<head.length;i++){
        appendNode(DLL,head[i]);
    }

    const k = 2

    printList(DLL);
    // reverseNaive(DLL);
//    const newHead =  reverseEff(DLL);
    const deletedK = deleteAllK(DLL,k);
    printList(deletedK);
}
judge()