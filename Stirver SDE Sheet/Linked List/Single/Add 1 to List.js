function Node(value){
    this.value = value;
    this.next = null;
}

function appendNode(head, value) {
    const newNode = new Node(value);
    if (!head) {
      return newNode;  // If the list is empty, return the new node as head
    }
  
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return head;
 }

 function printList(head) {
    let current = head;
    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  var reverseLinkedList = function(head){
    let prev = null;
    let current = head;
    
    while(current !== null){
      let next = current.next; 
      current.next = prev;   
      prev = current;
      current = next;
    }
    return prev;
  }

var addOne = function(head){
    head = reverseLinkedList(head);
    let temp = head;
    let carry = 1;
    while(temp!== null){
        let sum = temp.value + carry;
        temp.value = sum%10;
        carry = Math.floor(sum/10);
        temp  = temp.next;
    }
    if(carry){
        let newNode = new Node(carry);
        head = reverseLinkedList(head);
        newNode.next = head;
        return newNode;
    }
    return reverseLinkedList(head);
}


function judge(){
    const head = [9,9,9,9,9];
    let SLL = new Node(head[0]);

    for(let i=1;i<head.length;i++){
        SLL=appendNode(SLL,head[i]);
    }

    console.log("Original List:")
    printList(SLL);  

    SLL = addOne(SLL);
    printList(SLL);

}
judge()
































