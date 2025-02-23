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

function judge(){
    const head = [1,2,3,4,5];
    let DLL = new Node(head[0]);
    for(let i=1;i<head.length;i++){
        appendNode(DLL,head[i]);
    }

    printList(DLL);
}
judge()