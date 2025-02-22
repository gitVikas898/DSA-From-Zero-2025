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



function judge(){
    const head = [1,2,3,4,5];
    let SLL = new Node(head[0]);

    for(let i=1;i<head.length;i++){
        SLL=appendNode(SLL,head[i]);
    }

    console.log("Original List:")
    printList(SLL);  

    SLL = reverseLinkedList(SLL);
    
    console.log("New List")
    printList(SLL)

}
judge()
































