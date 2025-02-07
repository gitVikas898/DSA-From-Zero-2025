function Node(value) {
    this.value = value;
    this.next = null;
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


  // Find Middle of a Linked List using Tortoise and Hare algo
  var middleNode = function(head) {
        let slow = head;
        let fast = head;
        while(fast!==null && fast.next !== null){
            slow  = slow.next;
            fast = fast.next.next;
        }
        return slow
  }


  //Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

var detectCycle = function(head) {
    // first find a cycle if cycle is there then detect the node 

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next;

      // if true means there is a cycle;
      if(slow === fast){

          let slow = head;

          while(slow !== fast){
            fast = fast.next 
            slow = slow.next;
          }
          return slow;

      }
    }

    return null
};

var detectCycleNaive = function(head){
  let map = new Map();

  let temp = head;

  while(temp!==null){
      if(map.has(temp)){
        return temp;
      }

      map.set(temp,1);
      temp = temp.next;
  }
  return null;
}

function judge(){
    const head = [1,2,3,4,5];
    let SLL = new Node(head[0]);

    for(let i=1;i<head.length;i++){
        SLL=appendNode(SLL,head[i]);
    }

    // let result = middleNode(SLL);
    // console.log(result.value);

    let result = detectCycleNaive(SLL);
    console.log(result.value);

}

judge()